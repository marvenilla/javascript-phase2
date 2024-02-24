const UploadContentModule = require('./UploadContentModule');
const ContentDisplayModule = require('./ContentDisplayModule');

UploadContentModule.uploadContent(
    'Review: Winter is Coming',
    'An insightful review of the first episode of Game of Thrones, discussing the introduction of key characters and setting the scene for the epic saga.',
    'review',
    'Detailed review content would go here.'
);

console.log(UploadContentModule.contentList);


// Display all content
ContentDisplayModule.displayAll();

// Display content by a specific type
ContentDisplayModule.displayByType('review');