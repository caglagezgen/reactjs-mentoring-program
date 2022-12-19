function getEnvironmentVariables() {
    let outputPath = '../dist/';
    let documentTitle;

    switch (process.env.NODE_ENV) {
        case 'production':
            outputPath += 'prod';
            documentTitle = 'production';
            break;
        case 'development':
        default:
            outputPath += 'dev';
            documentTitle = 'development';
            break;
    }

    return [ outputPath, documentTitle ];
};

module.exports = {
    getEnvironmentVariables
};
