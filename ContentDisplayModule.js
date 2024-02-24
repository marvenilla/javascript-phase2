const { contentList } = require('./UploadContentModule');

const ContentDisplayModule = (() => {
    // Function without parameters to display all content
    function displayAllContent() {
        if (contentList.length === 0) {
            console.log('No content available.');
            return;
        }
        contentList.forEach(content => {
            console.log(`ID: ${content.id}, Title: ${content.title}, Description: ${content.description}`);
        });
    }

    // Function with parameters to display content by type
    function displayContentByType(type) {
        const filteredContent = contentList.filter(content => content.contentType === type);
        if (filteredContent.length === 0) {
            console.log(`No content found for type: ${type}`);
            return;
        }
        filteredContent.forEach(content => {
            console.log(`ID: ${content.id}, Title: ${content.title}, Description: ${content.description}`);
        });
    }

    // Expose public API
    return {
        displayAll: displayAllContent,
        displayByType: displayContentByType
    };
})();

module.exports = ContentDisplayModule;