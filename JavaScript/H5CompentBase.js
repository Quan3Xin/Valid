var H5CompentBase = function (name, config ) {
    var config = config || {};
    var id  = ('h5_c_' + Math.random()).replace('.', '_');

    var cls = 'h5_componet_' + config.type + 'h5_compoent_name'+name;
    var compoent = $('<div class="h5_compoent' +cls+'" id="'+id+'">');
    config.text && component.text(config.text);
    config.width && component.widht(config.width/2);
    config.height && component.height(config.height/2);
    
    config.css && component.css(config.css);
    config.bg  && component.css('backgroundImage','url('+config.bg+')');

    if (config.center === true) {
        component.css({
            marginLeft: (config.width/4 * -1) + 'px',
            left: '50%'
    })
    }
    return component;

}
