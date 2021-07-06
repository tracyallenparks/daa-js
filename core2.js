const terms = { ae:'Any Warp Engine', ah:'Aft Hull', ar:'APR', aw:'Any Weapon', ax:'Auxillary Control', ba:'Battery', br:'Bridge', co:'Cargo', cw:'Center Warp Engine', dc:'Damage Control', dr:'Drone', eb:'Emergency Bridge', fb:'Flag Bridge', fh:'Forward Hull', ip:'Impulse', lb:'Lab', lw:'Left Warp Engine', ph:'Phaser', pr:'Probe', rw:'Right Warp Engine', sc:'Scanner', se:'Sensor', sh:'Shuttle', tp:'Torpedo', tc:'Tractor', ts:'Transporter', xd:'Excess Damage' };

const cards = [
    //structure is { nm: '%RESULT NAME%', uq: '%IS THIS UNIQUE OR NOT%'}
    //0 never a result from 2D6
    null,
    //1 never a result from  2D6
    null,
    //2
    [
        { nm: terms.br, uq: 1 },
        { nm: terms.fb, uq: 1 },
        { nm: terms.se, uq: 1 },
        { nm: terms.dc, uq: 1 },
        { nm: terms.ah, uq: 1 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.ts, uq: 0 },
        { nm: terms.tc, uq: 0 },
        { nm: terms.sh, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.fh, uq: 0 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //3
    [
        { nm: terms.dr, uq: 1 },
        { nm: terms.ph, uq: 1 },
        { nm: terms.ip, uq: 0 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.ah, uq: 0 },
        { nm: terms.sh, uq: 0 },
        { nm: terms.dc, uq: 1 },
        { nm: terms.cw, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.ba, uq: 0 },
        { nm: terms.ph, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //4
    [
        { nm: terms.ph, uq: 1 },
        { nm: terms.ts, uq: 1 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.ip, uq: 0 },
        { nm: terms.fh, uq: 0 },
        { nm: terms.ah, uq: 0 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.ar, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.ts, uq: 0 },
        { nm: terms.pr, uq: 0 },
        { nm: terms.cw, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //5
    [
        { nm: terms.rw, uq: 1 },
        { nm: terms.ah, uq: 0 },
        { nm: terms.co, uq: 0 },
        { nm: terms.ba, uq: 0 },
        { nm: terms.sh, uq: 0 },
        { nm: terms.tp, uq: 1 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.ip, uq: 0 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.tc, uq: 0 },
        { nm: terms.pr, uq: 0 },
        { nm: terms.aw, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //6
    [
        { nm: terms.fh, uq: 0 },
        { nm: terms.ip, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.se, uq: 1 },
        { nm: terms.tc, uq: 0 },
        { nm: terms.sh, uq: 0 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.ph, uq: 0 },
        { nm: terms.ts, uq: 0 },
        { nm: terms.ba, uq: 0 },
        { nm: terms.aw, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //7
    [
        { nm: terms.co, uq: 0 },
        { nm: terms.fh, uq: 0 },
        { nm: terms.ba, uq: 0 },
        { nm: terms.cw, uq: 0 },
        { nm: terms.sh, uq: 0 },
        { nm: terms.ar, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.ph, uq: 0 },
        { nm: terms.ae, uq: 0 },
        { nm: terms.pr, uq: 0 },
        { nm: terms.ah, uq: 0 },
        { nm: terms.aw, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //8
    [
        { nm: terms.ah, uq: 0 },
        { nm: terms.ar, uq: 0 },
        { nm: terms.sh, uq: 0 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.sc, uq: 1 },
        { nm: terms.tc, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.ph, uq: 0 },
        { nm: terms.ts, uq: 0 },
        { nm: terms.ba, uq: 0 },
        { nm: terms.aw, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //9
    [
        { nm: terms.lw, uq: 1 },
        { nm: terms.fh, uq: 0 },
        { nm: terms.co, uq: 0 },
        { nm: terms.ba, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.dr, uq: 1 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.ip, uq: 0 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.tc, uq: 0 },
        { nm: terms.pr, uq: 0 },
        { nm: terms.aw, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //10
    [
        { nm: terms.ph, uq: 1 },
        { nm: terms.tc, uq: 1 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.ip, uq: 0 },
        { nm: terms.ah, uq: 0 },
        { nm: terms.fh, uq: 0 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.ar, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.ts, uq: 0 },
        { nm: terms.pr, uq: 0 },
        { nm: terms.cw, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //11
    [
        { nm: terms.tp, uq: 1 },
        { nm: terms.ph, uq: 1 },
        { nm: terms.ip, uq: 0 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.fh, uq: 0 },
        { nm: terms.tc, uq: 0 },
        { nm: terms.dc, uq: 1 },
        { nm: terms.cw, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.ba, uq: 0 },
        { nm: terms.ph, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ],
    //12
    [
        { nm: terms.ax, uq: 1 },
        { nm: terms.eb, uq: 1 },
        { nm: terms.sc, uq: 1 },
        { nm: terms.pr, uq: 1 },
        { nm: terms.fh, uq: 1 },
        { nm: terms.rw, uq: 0 },
        { nm: terms.ts, uq: 0 },
        { nm: terms.sh, uq: 0 },
        { nm: terms.tc, uq: 0 },
        { nm: terms.lb, uq: 0 },
        { nm: terms.ah, uq: 0 },
        { nm: terms.lw, uq: 0 },
        { nm: terms.xd, uq: 0 }
    ]
];

const reset_log = {
    'rolls': [],
    'results': {
        'average': 0,
        'die_rolls': {
            '2': 0,'3': 0,'4': 0,'5': 0,'6': 0,'7': 0,'8': 0,'9': 0,'10': 0,'11': 0,'12': 0
        },
        'internal_type': {
            'Any Warp Engine': {'total': 0, 'exclude': false},
            'Aft Hull': {'total': 0, 'exclude': false},
            'APR': {'total': 0, 'exclude': false},
            'Any Weapon': {'total': 0, 'exclude': false},
            'Auxillary Control': {'total': 0, 'exclude': false},
            'Battery': {'total': 0, 'exclude': false},
            'Bridge': {'total': 0, 'exclude': false},
            'Cargo': {'total': 0, 'exclude': false},
            'Center Warp Engine': {'total': 0, 'exclude': false},
            'Damage Control': {'total': 0, 'exclude': false},
            'Drone': {'total': 0, 'exclude': false},
            'Emergency Bridge': {'total': 0, 'exclude': false},
            'Flag Bridge': {'total': 0, 'exclude': false},
            'Forward Hull': {'total': 0, 'exclude': false},
            'Impulse': {'total': 0, 'exclude': false},
            'Lab': {'total': 0, 'exclude': false},
            'Left Warp Engine': {'total': 0, 'exclude': false},
            'Phaser': {'total': 0, 'exclude': false},
            'Probe': {'total': 0, 'exclude': false},
            'Right Warp Engine': {'total': 0, 'exclude': false},
            'Scanner': {'total': 0, 'exclude': false},
            'Sensor': {'total': 0, 'exclude': false},
            'Shuttle': {'total': 0, 'exclude': false},
            'Torpedo': {'total': 0, 'exclude': false},
            'Tractor': {'total': 0, 'exclude': false},
            'Transporter': {'total': 0, 'exclude': false},
            'Excess Damage': {'total': 0, 'exclude': false}
        }
    },
    'unique_log': []
};

let session_log = JSON.parse(JSON.stringify(reset_log));

const session = (function(){
    const session_Clear = function(){
        window.localStorage.daaSession = JSON.stringify(reset_log);
    };
    const session_Load = function(){
        if (!window.localStorage.daaSession || (window.localStorage.daaSession && typeof JSON.parse(window.localStorage.daaSession) !== 'object')) {
            session.clear();
        }
        const q = JSON.parse(window.localStorage.daaSession);
        return q;
    };
    const session_Save = function(){
        const q = JSON.stringify(session_log);
        window.localStorage.daaSession = q;
    };
    return {
        clear: session_Clear,
        load: session_Load,
        save: session_Save
    };
})();

// on page load
(function(){
    let session_exists = window.localStorage.daaSession;
    if (session_exists) {
        session_exists = JSON.parse(window.localStorage.daaSession);
        if (typeof session_exists === 'object' && session_exists['rolls'] && session_exists['rolls'].length > 0) {
            build_modal(session_exists['rolls'].length);
        } else {
            session.clear();
            build_form();
        }
    } else {
        build_form();
    }
})();

// app functions
function roll_die(){
    const c = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return c;
}
function average_roll(num,arr){
    let q = null
    if (typeof arr === 'object') {
        q = Math.round(num/arr.length);
    } else {
        q = Math.round(num/arr);
    }
    return q;
}
function process_rolls(user_input){
    let valid_input = true;
    if (typeof user_input === 'string' && user_input.toLowerCase().indexOf('test') > -1) {
        user_input = 4;
        session_log['average'] = 'TEST ONLY';
        session_log['rolls'] = [{'one':2,'two':2,'total':4},{'one':5,'two':5,'total':10},{'one':5,'two':6,'total':11},{'one':6,'two':5,'total':11}];
    } else if (typeof user_input === 'number') {
        let roll_total = 0
        let i = 0
        while (i < user_input){
            let die_one =roll_die();
            let die_two = roll_die();
            let die_total = die_one + die_two;
            let this_result = { 'one': die_one, 'two': die_two, 'total': die_total };
            session_log['rolls'].push(this_result);

            session_log['results']['die_rolls'][die_total] = session_log['results']['die_rolls'][die_total]+1;

            i++
        }
    } else {
        valid_input = false;
    }

    if (!valid_input) {
        //alert user and rebuild form
        build_form();
    } else {
        //process_log();
        build_carousel();
    }
}

function process_log(){
    let i = 0;
    let roll_total = 0;
    while(i < session_log['rolls'].length){
        let card_col = 0;
        let this_card = process_results(session_log['rolls'][i]['total'],card_col);
        
        roll_total = roll_total + session_log['rolls'][i]['total'];
    
        session_log['rolls'][i]['col'] = this_card[1];

        i++
    }
    if (session_log['average'] === false) {
        session_log['average'] = average_roll(roll_total,session_log['rolls'].length);
    }
    session.save();
}

function process_results(total,col){
    let valid = false;
    while(!valid && col < 14){
        if ((cards[total][col]['Unique'] && session_log['unique_log'].indexOf(total+','+col) > -1) || session_log['results']['internal_type'][cards[total][col]['Name']]['exclude']) {
            col++
        } else {
            if (cards[total][col]['Unique']) {
                session_log['unique_log'].push(total+','+col);
            }

            valid = true;
        }
    }
    return [total,col];
}

function build_carousel(){
    const main = document.querySelector('main');
        main.innerHTML = '';
    const carousel = make_element('div',{
        class:'carousel-wrapper',
        html:'<div class="carousel-container"></div>'
    });
    main.appendChild(carousel);
    build_result(0);
}

function build_form(){
    const root_elemet = document.querySelector('main');
    if (root_elemet) {
        root_elemet.innerHTML = '<div class="content-section"> <fieldset class="form-group"> <legend class="border-bottom mb-4">How many internals?</legend> <div class="form-group"> <input class="form-control-lg" id="internals" name="internals" required="" type="text" value=""> </div> </fieldset> <div class="form-group"> <div class="btn btn-lg btn-danger" id="submit">Do Your Damage</div> </div> </div>';
        const button = document.querySelector('#submit');
        button.onclick = function(){
            if (document.querySelector('input[name="internals"]')) {
                if (!isNaN(parseInt(document.querySelector('input[name="internals"]').value))) {
                    process_rolls(parseInt(document.querySelector('input[name="internals"]').value));
                    session.save();
                } else {
                    process_rolls(document.querySelector('input[name="internals"]').value);
                    session.save();
                }
            }
        };
    }
}

function build_modal(data){
    if (document.querySelector('.page-load-modal')) {
        document.querySelector('.page-load-modal').parentElement.removeChild(document.querySelector('.page-load-modal'));
    }
    const body = document.querySelector('body');
    if (body) {
        const modal = make_element('div',{
            class:'page-load-modal modal fade hide',
            role:'dialog',
            html:`
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <p>It seems you have a saved session of ` + data + ` internals.</p>
                            <p> Would you like to:</p>
                        </div>
                        <div class="modal-footer">
                            <div class="btn btn-lg btn-block btn-success" data-session="load">Continue Session</div>
                            <div class="btn btn-lg btn-block btn-warning" data-session="reset">New Session</div>
                        </div>
                    </div>
                </div>
            `
        });

        body.insertBefore(modal,body.firstElementChild);

        jQuery('.modal').modal('show');

        document.querySelector('.btn[data-session="load"]').onclick = function(){
            jQuery('.page-load-modal').modal('hide');
            session_log = session.load();
            build_carousel();
        };
        document.querySelector('.btn[data-session="reset"]').onclick = function(){
            jQuery('.page-load-modal').modal('hide');
            session.clear();
            build_form()
        };
    }
}


function build_result(i){
    let data = session_log['rolls'][i];
    let the_Results = process_results(data['total'],0)
    let total = the_Results[0];
    let col = the_Results[1];
    let result = cards[total][col];
    let carousel = document.querySelector('.carousel-container');
    const carouselItem = make_element('div',{
        class: 'internal-card animate__animated animate__bounceIn',
        'data-entry':i,
        'data-col':col,
        'data-total':total,
        'tab-index':'-1',
        html:`
            <div class="internal-header">Internal Number: ` + (i+1) + `</div>
            <div class="dice-wrapper">
                <div class="dice" data-set="` + data['one'] + `">
                    <div class="pip-column">
                        <span class="pip pip-four pip-five pip-six"></span>
                        <span class="pip pip-six"></span>
                        <span class="pip pip-two pip-three pip-four pip-five pip-six"></span>
                    </div>
                    <div class="pip-column">
                        <span class="pip pip-blank"></span>
                        <span class="pip pip-one pip-three pip-five"></span>
                        <span class="pip pip-blank"></span>
                    </div>
                    <div class="pip-column">
                        <span class="pip pip-two pip-three pip-four pip-five pip-six"></span>
                        <span class="pip pip-six"></span>
                        <span class="pip pip-four pip-five pip-six"></span>
                    </div>
                </div>
                <div class="dice" data-set="` + data['two'] + `">
                    <div class="pip-column">
                        <span class="pip pip-four pip-five pip-six"></span>
                        <span class="pip pip-six"></span>
                        <span class="pip pip-two pip-three pip-four pip-five pip-six"></span>
                    </div>
                    <div class="pip-column">
                        <span class="pip pip-blank"></span>
                        <span class="pip pip-one pip-three pip-five"></span>
                        <span class="pip pip-blank"></span>
                    </div>
                    <div class="pip-column">
                        <span class="pip pip-two pip-three pip-four pip-five pip-six"></span>
                        <span class="pip pip-six"></span>
                        <span class="pip pip-four pip-five pip-six"></span>
                    </div>
                </div>
                <div class="roll-container">
                    <div class="roll-header">Roll:</div>
                    <div class="roll-result">'+total+'</div>
                </div>
            </div>
            <div class="result-wrapper">
                ` + internal_message(result) + `
            </div>
            <div class="buttons-wrapper"></div>
        `
    });

        //buttons
        const thisButton_none = make_element('div',{
            class:'button-none btn btn-lg btn-block btn-danger',
            html: 'None'
        });

        const thisButton_last = make_element('div',{
            class:'button-last btn btn-lg btn-block btn-warning',
            html: 'Last'
        });

        const thisButton_next = make_element('div',{
            class:'button-next btn btn-lg btn-block btn-success',
            html: ((i === session_log['rolls'].length-1)?'Show Stats':'Next')
        });

        thisButton_none.onclick = function(){button_none(this);};
        thisButton_last.onclick = function(){button_last(this);};
        thisButton_next.onclick = function(){button_next(this);};

        carouselItem.querySelector('.buttons-wrapper').appendChild(thisButton_none);
        carouselItem.querySelector('.buttons-wrapper').appendChild(thisButton_last);
        carouselItem.querySelector('.buttons-wrapper').appendChild(thisButton_next);

    //carousel.appendChild(carouselItem);
    carousel.insertBefore(carouselItem,carousel.firstElementChild);
}

function internal_message(result){
    let internal_info = '<div class="internal-info">'+result['Name']+'</div> <div class="internal-info-additional">';
    if (result['Name'].toLowerCase().indexOf('hull') > -1) {
        if (result['Name'].toLowerCase().indexOf('aft') > -1) {
            internal_info += ' or Rear Hull';
        }
        internal_info += ' or Center Hull';
    } else if (result['Name'].toLowerCase().indexOf('apr') > -1) {
        internal_info += ' or AWR';
    } else if ((result['Name'].toLowerCase().indexOf('phaser') > -1 || result['Name'].toLowerCase().indexOf('torpedo') > -1 || result['Name'].toLowerCase().indexOf('drone') > -1) && (session_log['results']['internal_type'][result['Name']]['total'] !== 0 && parseInt(session_log['results']['internal_type'][result['Name']]['total']+1) % 3 === 0)) {
        internal_info += '<b>Best Type!</b> (see rule: D4.322)';
    } else{
        internal_info += '&nbsp;';
    }
        internal_info += '</div>';

    return internal_info;
}

function build_statCard(){
    process_log();
    let carousel = document.querySelector('.carousel-container');
    let carouselItem = document.createElement('div');
        carouselItem.classList.add('internal-card');
        carouselItem.classList.add('internal-stats');
        carouselItem.setAttribute('tab-index',session_log['rolls'].length);
        carouselItem.setAttribute('data-entry','stats');
    carouselItem.innerHTML = '<div class="stats-wrapper"><div class="internal-header">Internal Stats</div><div class="high-view"> <div class="internal-number"><span class="label">Internals: </span><span class="result">'+session_log['rolls'].length+'</span></div> <div class="internal-number-average"><span class="label">Average Die Roll: </span><span class="result">'+session_log['average']+'</span></div> </div></div>';
    //carousel.appendChild(carouselItem);
    carousel.insertBefore(carouselItem,carousel.firstElementChild);
}

function button_edit(ele){

}
function button_none(ele){
    let this_card = ele.parentElement.parentElement;
    let this_entry = parseInt(this_card.getAttribute('data-entry'));
    //let this_data_col = parseInt(this_card.getAttribute('data-col'));
    let this_internal_name = this_card.querySelector('.internal-info').innerText;
    let session_internal_type = session_log['results']['internal_type'][this_internal_name];
    session_internal_type['exclude'] = true;
    session.save();
    this_card.classList.remove('animate__fadeIn');
    this_card.classList.add('animate__fadeOut');
    build_result(this_entry);
    this_card.parentElement.removeChild(this_card);
}
function button_last(ele){
    let this_card = ele.parentElement.parentElement;
    let this_entry = parseInt(this_card.getAttribute('data-entry'));
    let this_internal_name = this_card.querySelector('.internal-info').innerText;
    let session_internal_type = session_log['results']['internal_type'][this_internal_name];

    session_internal_type['total'] = session_internal_type['total']+1;
    session_internal_type['exclude'] = true;

    ele.parentElement.classList.add('disabled');
    session.save();

     if (this_entry < (session_log['rolls'].length-1)) {
        build_result(this_entry+1);
    } else {
        build_statCard();
    }
}
function button_next(ele){
    let this_card = ele.parentElement.parentElement;
    let this_entry = parseInt(this_card.getAttribute('data-entry'));
    let this_internal_name = this_card.querySelector('.internal-info').innerText;
    let session_internal_type = session_log['results']['internal_type'][this_internal_name];

    session_internal_type['total'] = session_internal_type['total']+1;

    ele.parentElement.classList.add('disabled');
    session.save();

    if (this_entry < (session_log['rolls'].length-1)) {
        build_result(this_entry+1);
    } else {
        build_statCard();
    }
}