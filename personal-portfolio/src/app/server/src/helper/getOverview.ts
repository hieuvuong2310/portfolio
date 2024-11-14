import * as fs from 'fs';
import * as path from 'path';

const getOverview = (): any => {
    const filePath = path.join(__dirname, '..', 'resources', 'overview.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
};

export default getOverview;