const scrape = require('website-scraper');

scrape({
    urls: ['https://www.wix.com/demone2/business-cv'],
    directory: 'C:/general-workstation/new-scrap',
    sources: [
        { selector: 'img', attr: 'src' },
        { selector: 'link[rel="stylesheet"]', attr: 'href' },
        { selector: 'script', attr: 'src' }
    ]
});