/**
 * Middleware to record demo page visitor count
 */
const recordDemoVisitors = (req, res, next) => {
    req.app.locals.pageViews++;
    next();
};

export { recordDemoVisitors };