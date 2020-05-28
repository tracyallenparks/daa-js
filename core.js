var ae = 'Any Warp Engine';
var ah = 'Aft Hull';
var ar = 'APR';
var aw = 'Any Weapon';
var ax = 'Auxillary Control';
var ba = 'Battery';
var br = 'Bridge';
var co = 'Cargo';
var cw = 'Center Warp Engine';
var dc = 'Damage Control';
var dr = 'Drone';
var eb = 'Emergency Bridge';
var fb = 'Flag Bridge';
var fh = 'Forward Hull';
var ip = 'Impulse';
var lb = 'Lab';
var lw = 'Left Warp Engine';
var ph = 'Phaser';
var pr = 'Probe';
var rw = 'Right Warp Engine';
var sc = 'Scanner';
var se = 'Sensor';
var sh = 'Shuttle';
var tp = 'Torpedo';
var tc = 'Tractor';
var ts = 'Transporter';
var xd = 'Excess Damage';

const reset_log = {
    'rolls': [],
    'average': false,
    'results': {
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

var session_log = JSON.parse(JSON.stringify(reset_log));

var cards = [
    //structure is {'Name': '%RESULT NAME%','Unique': '%IS THIS UNIQUE OR NOT%'}
    //0 never a result from 2D6
    false,
    //1 never a result from  2D6
    false,
    //2
    [
        {'Name': br,'Unique':true},
        {'Name': fb,'Unique':true},
        {'Name': se,'Unique':true},
        {'Name': dc,'Unique':true},
        {'Name': ah,'Unique':true},
        {'Name': lw,'Unique':false},
        {'Name': ts,'Unique':false},
        {'Name': tc,'Unique':false},
        {'Name': sh,'Unique':false},
        {'Name': lb,'Unique':false},
        {'Name': fh,'Unique':false},
        {'Name': rw,'Unique':false},
        {'Name': xd,'Unique':false}
    ],
    //3
    [
        {'Name': dr,'Unique': true},
        {'Name': ph,'Unique': true},
        {'Name': ip,'Unique': false},
        {'Name': lw,'Unique': false},
        {'Name': rw,'Unique': false},
        {'Name': ah,'Unique': false},
        {'Name': sh,'Unique': false},
        {'Name': dc,'Unique': true},
        {'Name': cw,'Unique': false},
        {'Name': lb,'Unique': false},
        {'Name': ba,'Unique': false},
        {'Name': ph,'Unique': false},
        {'Name': xd,'Unique': false}
    ],
    //4
    [
        {'Name': ph,'Unique': true},
        {'Name': ts,'Unique': true},
        {'Name': rw,'Unique': false},
        {'Name': ip,'Unique': false},
        {'Name': fh,'Unique': false},
        {'Name': ah,'Unique': false},
        {'Name': lw,'Unique': false},
        {'Name': ar,'Unique': false},
        {'Name': lb,'Unique': false},
        {'Name': ts,'Unique': false},
        {'Name': pr,'Unique': false},
        {'Name': cw,'Unique': false},
        {'Name': xd,'Unique': false}
    ],
    //5
    [
        {'Name': rw,'Unique': true},
        {'Name': ah,'Unique': false},
        {'Name': co,'Unique': false},
        {'Name': ba,'Unique': false},
        {'Name': sh,'Unique': false},
        {'Name': tp,'Unique': true},
        {'Name': lw,'Unique': false},
        {'Name': ip,'Unique': false},
        {'Name': rw,'Unique': false},
        {'Name': tc,'Unique': false},
        {'Name': pr,'Unique': false},
        {'Name': aw,'Unique': false},
        {'Name': xd,'Unique': false}
    ],
    //6
    [
        {'Name': fh,'Unique': false},
        {'Name': ip,'Unique': false},
        {'Name': lb,'Unique': false},
        {'Name': lw,'Unique': false},
        {'Name': se,'Unique': true},
        {'Name': tc,'Unique': false},
        {'Name': sh,'Unique': false},
        {'Name': rw,'Unique': false},
        {'Name': ph,'Unique': false},
        {'Name': ts,'Unique': false},
        {'Name': ba,'Unique': false},
        {'Name': aw,'Unique': false},
        {'Name': xd,'Unique': false}
    ],
    //7
    [
        {'Name': co,'Unique': false},
        {'Name': fh,'Unique': false},
        {'Name': ba,'Unique': false},
        {'Name': cw,'Unique': false},
        {'Name': sh,'Unique': false},
        {'Name': ar,'Unique': false},
        {'Name': lb,'Unique': false},
        {'Name': ph,'Unique': false},
        {'Name': ae,'Unique': false},
        {'Name': pr,'Unique': false},
        {'Name': ah,'Unique': false},
        {'Name': aw,'Unique': false},
        {'Name': xd,'Unique': false}
    ],
    //8
    [
        {'Name': ah,'Unique': false},
        {'Name': ar,'Unique': false},
        {'Name': sh,'Unique': false},
        {'Name': rw,'Unique': false},
        {'Name': sc,'Unique': true},
        {'Name': tc,'Unique': false},
        {'Name': lb,'Unique': false},
        {'Name': lw,'Unique': false},
        {'Name': ph,'Unique': false},
        {'Name': ts,'Unique': false},
        {'Name': ba,'Unique': false},
        {'Name': aw,'Unique': false},
        {'Name': xd,'Unique': false}
    ],
    //9
    [
        {'Name': lw,'Unique': true},
        {'Name': fh,'Unique': false},
        {'Name': co,'Unique': false},
        {'Name': ba,'Unique': false},
        {'Name': lb,'Unique': false},
        {'Name': dr,'Unique': true},
        {'Name': rw,'Unique': false},
        {'Name': ip,'Unique': false},
        {'Name': lw,'Unique': false},
        {'Name': tc,'Unique': false},
        {'Name': pr,'Unique': false},
        {'Name': aw,'Unique': false},
        {'Name': xd,'Unique': false}
    ],
    //10
    [
        {'Name': ph,'Unique': true},
        {'Name': tc,'Unique': true},
        {'Name': lw,'Unique': false},
        {'Name': ip,'Unique': false},
        {'Name': ah,'Unique': false},
        {'Name': fh,'Unique': false},
        {'Name': rw,'Unique': false},
        {'Name': ar,'Unique': false},
        {'Name': lb,'Unique': false},
        {'Name': ts,'Unique': false},
        {'Name': pr,'Unique': false},
        {'Name': cw,'Unique': false},
        {'Name': xd,'Unique': false}
    ],
    //11
    [
        {'Name': tp,'Unique': true},
        {'Name': ph,'Unique': true},
        {'Name': ip,'Unique': false},
        {'Name': rw,'Unique': false},
        {'Name': lw,'Unique': false},
        {'Name': fh,'Unique': false},
        {'Name': tc,'Unique': false},
        {'Name': dc,'Unique': true},
        {'Name': cw,'Unique': false},
        {'Name': lb,'Unique': false},
        {'Name': ba,'Unique': false},
        {'Name': ph,'Unique': false},
        {'Name': xd,'Unique': false}
    ],
    //12
    [
        {'Name': ax,'Unique': true},
        {'Name': eb,'Unique': true},
        {'Name': sc,'Unique': true},
        {'Name': pr,'Unique': true},
        {'Name': fh,'Unique': true},
        {'Name': rw,'Unique': false},
        {'Name': ts,'Unique': false},
        {'Name': sh,'Unique': false},
        {'Name': tc,'Unique': false},
        {'Name': lb,'Unique': false},
        {'Name': ah,'Unique': false},
        {'Name': lw,'Unique': false},
        {'Name': xd,'Unique': false}
    ]
];

var session = (function(){
    const session_Clear = function(){
        window.sessionStorage.daaSession = JSON.stringify(reset_log);
    };
    const session_Load = function(){
        if (!window.sessionStorage.daaSession || (window.sessionStorage.daaSession && typeof JSON.parse(window.sessionStorage.daaSession) !== 'object')) {
            session.clear();
        }
        let q = JSON.parse(window.sessionStorage.daaSession);
        return q;
    };
    const session_Save = function(){
        let q = JSON.stringify(session_log);
        window.sessionStorage.daaSession = q;
    };
    return {
        clear: session_Clear,
        load: session_Load,
        save: session_Save
    };
})();

// on page load
(function(){
    let session_exists = window.sessionStorage.daaSession;
    if (session_exists) {
        session_exists = JSON.parse(window.sessionStorage.daaSession);
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
    let c = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
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
    let main = document.querySelector('main');
        main.innerHTML = '';
    let carousel = document.createElement('div');
        carousel.classList.add('carousel-wrapper');
        carousel.innerHTML = '<div class="carousel-container"></div>';
    main.appendChild(carousel);
    build_result(0);
}

function build_form(){
    let root_elemet = document.querySelector('main');
    if (root_elemet) {
        root_elemet.innerHTML = '<div class="content-section"> <fieldset class="form-group"> <legend class="border-bottom mb-4">How many internals?</legend> <div class="form-group"> <input class="form-control-lg" id="internals" name="internals" required="" type="text" value=""> </div> </fieldset> <div class="form-group"> <div class="btn btn-lg btn-danger" id="submit">Do Your Damage</div> </div> </div>';
        var button = document.querySelector('#submit');
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
    let body = document.querySelector('body');
    if (body) {
        let modal = document.createElement('div');
            modal.classList.add('page-load-modal');
            modal.classList.add('modal');
            modal.classList.add('fade');
            modal.classList.add('hide');
            modal.setAttribute('role','dialog');
            modal.innerHTML = '<div class="modal-dialog"><div class="modal-content"> <div class="modal-body"><p>It seems you have a saved session of '+data+' internals.</p><p> Would you like to:</p></div><div class="modal-footer"> <div class="btn btn-lg btn-block btn-success" data-session="load">Continue Session</div> <div class="btn btn-lg btn-block btn-warning" data-session="reset">New Session</div></div> </div></div>';
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
    let carouselItem = document.createElement('div');
        carouselItem.classList.add('internal-card');
        carouselItem.classList.add('animate__animated');
        carouselItem.classList.add('animate__bounceIn');
        carouselItem.setAttribute('data-entry',i);
        carouselItem.setAttribute('data-col',col);
        carouselItem.setAttribute('data-total',total);
        carouselItem.setAttribute('tab-index','-1');
    let carouselItemHTML = '';
        //header
        carouselItemHTML += '<div class="internal-header">Internal Number: '+(i+1)+'</div>';
        //dice
        carouselItemHTML += '<div class="dice-wrapper"> <div class="dice" data-set="'+data['one']+'"> <div class="pip-column"> <span class="pip pip-four pip-five pip-six"></span> <span class="pip pip-six"></span> <span class="pip pip-two pip-three pip-four pip-five pip-six"></span> </div> <div class="pip-column"> <span class="pip pip-blank"></span> <span class="pip pip-one pip-three pip-five"></span> <span class="pip pip-blank"></span> </div> <div class="pip-column"> <span class="pip pip-two pip-three pip-four pip-five pip-six"></span> <span class="pip pip-six"></span> <span class="pip pip-four pip-five pip-six"></span> </div> </div> <div class="dice" data-set="'+data['two']+'"> <div class="pip-column"> <span class="pip pip-four pip-five pip-six"></span> <span class="pip pip-six"></span> <span class="pip pip-two pip-three pip-four pip-five pip-six"></span> </div> <div class="pip-column"> <span class="pip pip-blank"></span> <span class="pip pip-one pip-three pip-five"></span> <span class="pip pip-blank"></span> </div> <div class="pip-column"> <span class="pip pip-two pip-three pip-four pip-five pip-six"></span> <span class="pip pip-six"></span> <span class="pip pip-four pip-five pip-six"></span> </div> </div> <div class="roll-container"> <div class="roll-header">Roll:</div> <div class="roll-result">'+total+'</div> </div> </div>';
        //internal info
        carouselItemHTML += '<div class="result-wrapper">';
        carouselItemHTML +=  internal_message(result);
        carouselItemHTML += ' </div>';
        //button wrapper
        carouselItemHTML += '<div class="buttons-wrapper"></div>';

        carouselItem.innerHTML = carouselItemHTML;

        //buttons
        let thisButton_none = document.createElement('div');
            thisButton_none.classList.add('button-none');
            thisButton_none.classList.add('btn');
            thisButton_none.classList.add('btn-lg');
            thisButton_none.classList.add('btn-block');
            thisButton_none.classList.add('btn-danger');
            thisButton_none.innerText = 'None';

        let thisButton_last = document.createElement('div');
            thisButton_last.classList.add('button-last');
            thisButton_last.classList.add('btn');
            thisButton_last.classList.add('btn-lg');
            thisButton_last.classList.add('btn-block');
            thisButton_last.classList.add('btn-warning');
            thisButton_last.innerText = 'Last';

        let thisButton_next = document.createElement('div');
            thisButton_next.classList.add('button-next');
            thisButton_next.classList.add('btn');
            thisButton_next.classList.add('btn-lg');
            thisButton_next.classList.add('btn-block');
            thisButton_next.classList.add('btn-success');
            thisButton_next.innerText = ((i === session_log['rolls'].length-1)?'Show Stats':'Next');

        thisButton_none.onclick = function(){button_none(this);};
        thisButton_last.onclick = function(){button_last(this);};
        thisButton_next.onclick = function(){button_next(this);};

        carouselItem.querySelector('.buttons-wrapper').appendChild(thisButton_none);
        carouselItem.querySelector('.buttons-wrapper').appendChild(thisButton_last);
        carouselItem.querySelector('.buttons-wrapper').appendChild(thisButton_next);

    carousel.appendChild(carouselItem);
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
    carousel.appendChild(carouselItem);
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