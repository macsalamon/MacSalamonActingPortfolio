import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function syncTranslations() {
  console.log('🔄 Syncing content from CMS to content.js...');

  // Read translation YAML files from cms/ folder
  const cmsDir = path.join(__dirname, '../cms');
  const enYaml = fs.readFileSync(path.join(cmsDir, 'en.yaml'), 'utf-8');
  const deYaml = fs.readFileSync(path.join(cmsDir, 'de.yaml'), 'utf-8');
  const plYaml = fs.readFileSync(path.join(cmsDir, 'pl.yaml'), 'utf-8');

  // Parse translation YAML
  const en = yaml.load(enYaml);
  const de = yaml.load(deYaml);
  const pl = yaml.load(plYaml);

  // Remove the 'lang' property as it's not needed in the translations object
  delete en.lang;
  delete de.lang;
  delete pl.lang;

  // Create translations object
  const translations = { en, de, pl };

  // Read the current content.js file
  const contentPath = path.join(__dirname, '../src/data/content.js');
  let contentFile = fs.readFileSync(contentPath, 'utf-8');

  // Create the new translations export as a properly formatted string
  const translationsString = `export const translations = ${JSON.stringify(translations, null, 2)};`;

  // Find and replace the translations object in the file
  const regex = /export const translations = \{[\s\S]*?\n\};/;

  if (!regex.test(contentFile)) {
    console.error('❌ Could not find translations export in content.js');
    process.exit(1);
  }

  contentFile = contentFile.replace(regex, translationsString);

  // Write back to content.js
  fs.writeFileSync(contentPath, contentFile, 'utf-8');

  console.log('✅ Content synced successfully from cms/ folder!');
  console.log('   📝 Translations:');
  console.log('      - English: ' + Object.keys(en).length + ' sections');
  console.log('      - German: ' + Object.keys(de).length + ' sections');
  console.log('      - Polish: ' + Object.keys(pl).length + ' sections');
}

syncTranslations();
