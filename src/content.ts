import staticContent from './assets/static.json'

export const pageHeader = staticContent.map(item => {
    return item.HOME_PAGE.content.headerText
});

export const searchHeader = staticContent.map(item => {
    return item.HOME_PAGE.content.searchHeader
});

export const subText = staticContent.map(item => {
    return item.HOME_PAGE.content.subText
});

export const searchButton = staticContent.map(item => {
    return item.HOME_PAGE.content.searchButton
});

export const scripturePage = staticContent.map(item => {
    return item.RESULTS_PAGE.content.scripturePage
});

export const userErrorMessage = staticContent.map(item => {
    return item.HOME_PAGE.content.userErrorMessage
});