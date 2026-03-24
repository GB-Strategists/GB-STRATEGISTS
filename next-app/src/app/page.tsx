import fs from 'fs';
import path from 'path';

export default function Home() {
  const contentPath = path.join(process.cwd(), 'src', 'data', 'body_content.html');
  const bodyContent = fs.readFileSync(contentPath, 'utf-8');

  return (
    <main dangerouslySetInnerHTML={{ __html: bodyContent }} />
  );
}
