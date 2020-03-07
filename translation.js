/**
 * Show global text data
 * get csv data from client. replace text on view
 * 
 * @param string csvData JSON format
 */
function showGlobalData(csvData)
{
    if (!csvData) {
        return;
    }
    var data = JSON.parse(csvData);
    $.each(data, function(objectName, objectList) {// objectName : "character". objectList is character list
        $.each(objectList, function(index, object) {
            translateText(objectName, object)
        });
    });
}

/**
 * Translate text
 * 
 * @param string objectName e.g.: character
 * @param object data
 */
function translateText(objectName, data)
{
    if (!data) {
        return;
    }
    $.each(data, function(k, v) {
        var elementClass = '.global_' + objectName + '_' + data.id + '_' + k;// e.g.: global_character_11001_name
        if ($(elementClass).length) {
            $(elementClass).text(v);
        }
    });
}

var url = '';
var paramList = {};
$('.translate_object_list').each(function() {// <input type="hidden" class="translate_object_list" value="character_id=1001,1102" />
    var value = $(this).val();
    if (value.indexOf('=') === -1) {
        return;
    }
    var str = value.split('=');
    var name = str[0].replace(/ /g , "");
    var valueList = str[1].replace(/ /g , "");
    paramList[name] = typeof paramList[str[0]] === 'undefined' ? valueList : paramList[name] + ',' + valueList;
});

if (paramList) {
    $.each(paramList, function(key, value) {
        url = url + key.trim() + '=' + value.trim() + '&';
    });
}
if (url) { // defrag-native://global?character_id=11001,12001&active_skill_id=1,2&equipment_id=1100021,1100241
    url = url.slice(0, -1);
    url = 'defrag-native://global?' + url;
    window.location = url;
}
