
/**
 * Function formatting a select (select2) to set flag icons
 */
function formatSelectFlag (opt) {
    if (!opt.id) { return opt.text; }
    return opt.id === 'en' ?
        $('<span></span><i class="flag-icon flag-icon-us"></i><i class="flag-icon flag-icon-gb"></i> ' + opt.text + '</span>')
        : $('<span></span><i class="flag-icon flag-icon-' + opt.id + '"></i> ' + opt.text + '</span>');
};