const UploadContentModule = {
    contentList: [],

    uploadContent: function (title, description, contentType, contentData) {
        const contentItem = {
            id: this.contentList.length + 1,
            title: title,
            description: description,
            contentType: contentType,
            contentData: contentData
        };

        this.contentList.push(contentItem);
        console.log('Content uploaded:', contentItem);
    }
};

module.exports = UploadContentModule;  