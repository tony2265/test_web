$(function () {
    csmapi.set_endpoint ('https://6.iottalk.tw');
    var profile = {
        'dm_name': 'call_view',
        'idf_list': [],
        'odf_list': [id_score],
    }
    
    var r = 255 ;
    var g = 0;
    var b = 255;
    var lum = 100;

    function draw () {
        var rr = Math.floor((r * lum) / 100);
        var gg = Math.floor((g * lum) / 100);
        var bb = Math.floor((b * lum) / 100);
        $('.bulb-top, .bulb-middle-1, .bulb-middle-2, .bulb-middle-3, .bulb-bottom, .night').css(
            {'background': 'rgb('+ rr +', '+ gg +', '+ bb +')'}
        );
    }

    function id_score (data) {
        r = data[0];
        g = data[1];
        draw();
    }

    function ida_init () {
        $('font')[0].innerText = profile.d_name;
        draw();
    }

    var ida = {
        'ida_init': ida_init,
    };

    dai(profile, ida);
});
