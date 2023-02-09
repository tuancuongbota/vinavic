$(document).ready( function(){
    $('.close_content').click(function(){
        close = $(this).attr('data-close');
        $('.furn-content_'+close+' .result_content').slideToggle();
    });
    $('.view').click(function(){
        $('.view').removeClass('view_active');
        $(this).addClass('view_active');
        id = $(this).attr('id');
        class_result = id.replace('view_price_','detail_');
        $('.result_des_detail').addClass('hide');
        $('.'+class_result).removeClass('hide');
        $("html, body").animate({
            scrollTop: $('.result_des').offset().top 
        }, 1000);
    });    
    $('#submit_furnitures').click(function(){
        $('.label_error').prev().remove();
        $('.label_error').remove();
        quotation_land_area = $('#quotation-land-area').val();
        quotation_construction_area = $('#quotation-construction-area').val();
        quotation_floor = $('#quotation-floor').val();
    
        if(parseInt(quotation_land_area) < 20) {
            showEror('quotation-land-area','Diện tích đất không được nhỏ hơn 20m!');
            return false;
        }
        if(parseInt(quotation_construction_area) < 20) {
            showEror('quotation-construction-area','Diện tích xây dựng không được nhỏ hơn 20m!');
            return false;
        }
        if(parseInt(quotation_construction_area) > parseInt(quotation_land_area)) {
            showEror('quotation-construction-area','Diện tích xây dựng không được lớn hơn diện tích đất!');
            return false;
        }
        if(parseInt(quotation_floor) < 1) {
            showEror('quotation-floor','Số tầng không được nhỏ hơn 1!');
            return false;
        }
    
        constructionType_name = $('input[name=constructionType]:checked').val();
        if(constructionType_name == 'villa') {
            constructionType_name = $('input[name=villa]:checked').val();
        }
    
        status_value = $('input[name=status]:checked').val();
    
        if(status_value == 1) {
            status_name = 'new_construction';
            status_name_tc = 'new';
    
        } else {
            status_name = 'regenerate';
            status_name_tc = 'regenerate';
        }
    
        packet_value = $('input[name=packet]:checked').val();
    
        if(packet_value == 1) {
            packet_name = 'full_package';
            title_result_main = 'Thiết kế trọn gói'
        } else {
            if (packet_value == 3) {
                packet_name = 'interior';
                title_result_main = 'Thiết kế nội thất';
            } else {
                packet_name = 'basic';
                title_result_main = 'Thiết kế kiến trúc';
            }
        }
    
        json_price_main_value = value_of_json('price_'+status_name+'_'+packet_name,config);
        price_main_unit = value_of_json(constructionType_name,json_price_main_value)*1000;
        json_description_main = value_of_json('design_'+packet_name,config.description);
        description_main_name = json_description_main.name;
        description_main_contents = json_description_main.contents;
        // alert(description_main_name);
        // alert(description_main_contents);
    
        price_main_value = price_main_unit*quotation_construction_area*quotation_floor;
        price_main = format_money(price_main_value);
    
        quotation = parseInt(quotation_land_area) - parseInt(quotation_construction_area);
    
        if(quotation < 20) {
            price_design_garden_value = 0;
            price_design_garden = 'Miễn phí';
        } else {
            // alert('111');
            price_design_garden_value = 10000000;
            price_design_garden = format_money(price_design_garden_value);
        }
    
        json_description_garden = value_of_json('design_garden'+packet_name,config.description);
        description_garden_name = json_description_garden.name;
        description_garden_contents = json_description_garden.contents;
    
        json_description_ttpt = value_of_json('construction_basic',config.description);
        description_tcpt_name = json_description_ttpt.name;
        description_tcpt_contents = json_description_ttpt.contents;
    
        json_description_tcht = value_of_json('construction_complete',config.description);
        description_tcht_name = json_description_tcht.name;
        description_tcht_contents = json_description_tcht.contents;
    
        json_description_tcnt = value_of_json('construction_interior',config.description);
        description_tcnt_name = json_description_tcnt.name;
        description_tcnt_contents = json_description_tcnt.contents;
    
    
    
    
        // tinh phi thi cong
    
        //thi cong phan tho
        json1_price_tc_value = value_of_json('price_'+status_name_tc,config);
        // console.log(json1_price_tc_value);
        json_price_tc_value = value_of_json(constructionType_name,json1_price_tc_value);
    
        // json_price_tc_value = value_of_json('build_basic',json2_price_tc_value);
        json_price_tcpt_value = value_of_json('build_basic',json_price_tc_value);
        json_price_tcht_value = value_of_json('build_complete',json_price_tc_value);
        json_price_tcnt_value = value_of_json('build_interior',json_price_tc_value);
    
        price_tcpt_min_unit = value_of_json('min',json_price_tcpt_value)*1000;
        price_tcpt_max_unit = value_of_json('max',json_price_tcpt_value)*1000;
        price_tcpt_min_value = price_tcpt_min_unit*quotation_construction_area*quotation_floor;
        price_tcpt_max_value = price_tcpt_max_unit*quotation_construction_area*quotation_floor;
        price_tcpt = format_money(price_tcpt_min_value)+' ~ '+format_money(price_tcpt_max_value);
    
    
        price_tcht_min_unit = value_of_json('min',json_price_tcht_value)*1000;
        price_tcht_max_unit = value_of_json('max',json_price_tcht_value)*1000;
        price_tcht_min_value = price_tcht_min_unit*quotation_construction_area*quotation_floor;
        price_tcht_max_value = price_tcht_max_unit*quotation_construction_area*quotation_floor;
        price_tcht = format_money(price_tcht_min_value - price_tcpt_min_value)+' ~ '+format_money(price_tcht_max_value - price_tcpt_max_value);
    
        price_tcnt_min_unit = value_of_json('min',json_price_tcnt_value)*1000;
        price_tcnt_max_unit = value_of_json('max',json_price_tcnt_value)*1000;
        price_tcnt_min_value = price_tcnt_min_unit*quotation_construction_area*quotation_floor;
        price_tcnt_max_value = price_tcnt_max_unit*quotation_construction_area*quotation_floor;
        price_tcnt = format_money(price_tcnt_min_value)+' ~ '+format_money(price_tcnt_max_value);
    
        price_total_min = price_main_value + price_design_garden_value + price_tcht_min_value + price_tcnt_min_value;
        price_total_max = price_main_value + price_design_garden_value + price_tcht_max_value + price_tcnt_max_value;
        price_total = format_money(price_total_min)+' ~ '+format_money(price_total_max);
    
        // alert(price_design_garden);
    
        $('.title_result_main span').html(title_result_main);
        $('.price_main').html(price_main);
        $('.detail_main .name').html(description_main_name);
        $('.detail_main .contents').html(description_main_contents);
    
        $('.price_tksv').html(price_design_garden);
        $('.detail_tksv .name').html(description_garden_name);
        $('.detail_tksv .contents').html(description_garden_contents);
    
        $('.price_tcpt').html(price_tcpt);
        $('.price_tcht').html(price_tcht);
        $('.price_tcnt').html(price_tcnt);
        $('.price_ttc').html(price_total);
    
        $('.detail_tcpt .name').html(description_tcpt_name);
        $('.detail_tcpt .contents').html(description_tcpt_contents);
        $('.detail_tcht .name').html(description_tcht_name);
        $('.detail_tcht .contents').html(description_tcht_contents);
        $('.detail_tcnt .name').html(description_tcnt_name);
        $('.detail_tcnt .contents').html(description_tcnt_contents);
    
        $('.result_des').removeClass('hide');
    
        $("html, body").animate({
            scrollTop: $('.furn-content_1').offset().top 
        }, 1000);

    })
});
function showEror(elemid, helperMsg){
	elem  = $('#'+elemid);
	invalid(elemid,helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}


	function notEmpty(elemid, helperMsg){
		elem  = $('#'+elemid);
		if(elem.val().length == 0){
			invalid(elemid,helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}

/*
 * Change border color where valid
 */
function valid(element){
    $("#"+element).removeClass("redborder");
    $("#"+element).parent().find('.label_error').prev().remove();
    $("#"+element).parent().find('.label_error').remove();
    $("#"+element).parent().find('.label_success').prev().remove();
    $("#"+element).parent().find('.label_success').remove();
}
/*
* Change border color where invalid
*/
function invalid(element,helperMsg){
    $("#"+element).parent().find('.label_error').prev().remove();
    $("#"+element).parent().find('.label_error').remove();
    $("#"+element).parent().find('.label_success').prev().remove();
    $("#"+element).parent().find('.label_success').remove();
    $('<br/><div class=\'label_error\'>'+helperMsg+'</div>').insertAfter($('#'+element).parent().children(':last'));
    $("#"+element).addClass("redborder");
    $("#"+element).focus();
}
function value_of_json(key, json, show = 0){
	if(show) console.log(key);
	arr = JSON.parse(JSON.stringify(json));
	if(!arr[key]) {
		return 0;
	} else {
		return arr[key];
	}

};
var config = {
    constructionType : {
        townHouseOne : "townHouseOne",
        townHouseTwo : "townHouseTwo",
        villa : "villa",
        cafe : "cafe",
        office : "office",
        hotelResort : "hotelResort"
    },

    villa : {
        modernVilla : "modernVilla",
        classicVilla : "classicVilla",
        semiClassicVilla : "semiClassicVilla",
        complexVilla : "complexVilla",
        smartVilla : "smartVilla"
    },

    status : {
        newBuilding: 1,
        regenerate: 2
    },
    packet : {
        full: 1,
        basic: 2,
        interiorDesign: 3,
    },

    /*********** Price full package **********/

    price_new_construction_full_package : {
        townHouseOne : 290,
        townHouseTwo : 300,
        modernVilla : 310,
        classicVilla : 360,
        semiClassicVilla : 310,
        smartVilla : 360,
        cafe : 350,
        office : 230,
        hotelResort : 310,
    },

    price_regenerate_full_package : {
        townHouseOne : 300,
        townHouseTwo : 320,
        modernVilla : 340,
        classicVilla : 380,
        semiClassicVilla : 310,
        smartVilla : 360,
        cafe : 300
    },

    /*********** Price basic **********/

    price_new_construction_basic : {
        townHouseOne : 120,
        townHouseTwo : 135,
        modernVilla : 150,
        classicVilla : 180,
        semiClassicVilla : 150,
        smartVilla : 180,
        cafe : 150,
        office : 120,
        hotelResort : 150,
    },

    price_regenerate_basic : {
        townHouseOne : 140,
        townHouseTwo : 160,
        modernVilla : 180,
        classicVilla : 210,
        semiClassicVilla : 150,
        smartVilla : 200,
        cafe : 180
    },
    /*********** Price interior **********/

    price_new_interior : {
        townHouseOne : 200,
        townHouseTwo : 200,
        modernVilla : 200,
        classicVilla : 220,
        semiClassicVilla : 200,
        smartVilla : 220,
        cafe : 150,
        office : 150,
        hotelResort : 200,
    },

    price_regenerate_interior : {
        townHouseOne : 200,
        townHouseTwo : 200,
        modernVilla : 200,
        classicVilla : 220,
        semiClassicVilla : 200,
        smartVilla : 220,
        cafe : 150
    },


    price_new : {
        townHouseOne : {
            build_basic: {
                min: 2900,
                max: 3200,
            },
            build_complete: {
                min: 5000,
                max: 5500,
            },
            build_interior: {
                min: 2000,
                max: 2500,
            }
        },
        townHouseTwo : {
            build_basic: {
                min: 3100,
                max: 3400,
            },
            build_complete: {
                min: 5200,
                max: 5700,
            },
            build_interior: {
                min: 2000,
                max: 2500,
            } 
        },
        modernVilla : {
            build_basic: {
                min: 3600,
                max: 4000,
            },
            build_complete: {
                min: 5700,
                max: 6200,
            },
            build_interior: {
                min: 2000,
                max: 2500,
            }
        },
        classicVilla : {
            build_basic: {
                min: 3800,
                max: 4200,
            },
            build_complete: {
                min: 7000,
                max: 8700,
            },
            build_interior: {
                min: 4000,
                max: 4500,
            }
        },
        semiClassicVilla : {
            build_basic: {
                min: 3800,
                max: 4200,
            },
            build_complete: {
                min: 6100,
                max: 6800,
            },
            build_interior: {
                min: 3000,
                max: 3500,
            } 
        },
        smartVilla : {
            build_basic: {
                min: 3600,
                max: 4000,
            },
            build_complete: {
                min: 5600,
                max: 6000,
            },
            build_interior: {
                min: 3000,
                max: 3500,
            }
        },
        cafe : {
            build_basic: {
                min: 3100,
                max: 3400,
            },
            build_complete: {
                min: 5200,
                max: 5700,
            },
            build_interior: {
                min: 2000,
                max: 2500,
            } 
        },
        office : {
         build_basic: {
            min: 3100,
            max: 3400,
        },
        build_complete: {
            min: 5000,
            max: 5500,
        },
        build_interior: {
            min: 2000,
            max: 2500,
        } 
    },
    hotelResort : {
        build_basic: {
            min: 3800,
            max: 4200,
        },
        build_complete: {
            min: 7000,
            max: 8700,
        },
        build_interior: {
            min: 4000,
            max: 4500,
        }  
    },
},

price_regenerate : {
    townHouseOne : {
        build_basic: {
            min: 1400,
            max: 1550,
        },
        build_complete: {
            min: 3500,
            max: 4000,
        },
        build_interior: {
            min: 2000,
            max: 2500,
        }
    },
    townHouseTwo : {
        build_basic: {
            min: 1600,
            max: 1800,
        },
        build_complete: {
            min: 3700,
            max: 4200,
        },
        build_interior: {
            min: 2000,
            max: 2500,
        } 
    },
    modernVilla : {
        build_basic: {
            min: 2000,
            max: 2200,
        },
        build_complete: {
            min: 4100,
            max: 4600,
        },
        build_interior: {
            min: 2000,
            max: 2500,
        }
    },
    classicVilla : {
        build_basic: {
            min: 2400,
            max: 2600,
        },
        build_complete: {
            min: 4500,
            max: 5000,
        },
        build_interior: {
            min: 4000,
            max: 4500,
        }
    },
    semiClassicVilla : {
        build_basic: {
            min: 2200,
            max: 2400,
        },
        build_complete: {
            min: 4300,
            max: 4800,
        },
        build_interior: {
            min: 3000,
            max: 3500,
        } 
    },
    smartVilla : {
        build_basic: {
            min: 2000,
            max: 2200,
        },
        build_complete: {
            min: 4000,
            max: 4200,
        },
        build_interior: {
            min: 3000,
            max: 3500,
        }
    },
    cafe : {
        build_basic: {
            min: 1600,
            max: 1800,
        },
        build_complete: {
            min: 3700,
            max: 4200,
        },
        build_interior: {
            min: 2000,
            max: 2500,
        } 
    },

},


/*********** Price ************/

description : {
    construction_basic: {
        name: "Chi tiết : Phần thô",
        contents : "Xây dựng phần thô bao gồm:<br>- Chi phí vật tư phần thô bao gồm: thép, bê tông, gạch, cát, đá các loại.<br>- Chi phí vật tư điện nước chôn ngầm.<br>- Chi phí nhân công phần nề và điện nước thực hiện đến hết công trình."
    },
    construction_complete: {
        name: "Chi tiết : Phần hoàn thiện",
        contents: "Chi phí hoàn thiện bao gồm:<br>-  Chi phí vật tư và nhân công phần trần, thạch cao, sơn vôi, ốp lát gạch nền, gạch tường, đá granite, lan can cầu thang.<br>-  Chi phí thiết bị và lắp đặt thiết bị điện (điện chiếu sáng, điện trang trí), thiết bị nước (bồn nước, máy bơm)<br>- Chi phí phần cửa."
    },
    construction_interior: {
        name: "Chi tiết : Phần nội thất",
        contents: "Chi phí nội thất bao gồm: <br>- Nội thất bếp và thiết kế bếp.<br>-  Gường, tủ áo, sofa, kệ ti vi các loại."
    }, 
    design_garden: {
        name: "Chi tiết : Thiết kế sân vườn",
        contents: "- Thiết kế phối cảnh sân vườn<br>- Triển khai hồ sơ thi công hạng mục sân vườn",
    },
    design_basic: {
        name: "Phần việc thực hiện",
        contents: "+ Xem phong thủy cơ bản<br>+ Thiết kế kiến trúc<br>+ Thiết kế kết cấu<br>+ Thiết kế M&E<br>+ Thiết kế phối cảnh ngoại thất<br>+ Chuẩn bị thành phần hồ sơ xin cấp phép xây dựng<br>+ Giám sát tác giả",
    },
    design_full_packet: {
        name: "Phần việc thực hiện",
        contents: "+ Xem phong thủy cơ bản<br>+ Thiết kế kiến trúc<br>+ Thiết kế kết cấu<br>+ Thiết kế M&E<br>+ Thiết kế phối cảnh ngoại thất<br>+ Thiết kế 3D không gian nội thất<br>+ Triển khai hồ sơ thi công hạng mục nội thất<br>+ Chuẩn bị thành phần hồ sơ xin cấp phép xây dựng<br>+ Giám sát tác giả<br>+ Tư vấn chọn vật liệu hoàn thiện trong giai đoạn thi công<br>+Khái toán tổng mức đầu tư XD",
    },

    design_interior: {
        name: "Phần việc thực hiện",
        contents: "+ Thiết kế 3D không gian nội thất<br>+ Triển khai hồ sơ thi công hạng mục nội thất<br>+ Tư vấn chọn vật liệu trong giai đoạn thi công",
    },
}
};
function format_money(number){
	formatmoney='VNĐ';
	number = number.toString();
	while (parseInt(number) > 999) {
		formatmoney = "." + number.slice(-3) + formatmoney;
		number = number.slice(0, -3);
	} 
	result = number + formatmoney;
	return result;
}
