var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Population_Distribution_ColomboDistrict_Census2012_SL_1 = new ol.format.GeoJSON();
var features_Population_Distribution_ColomboDistrict_Census2012_SL_1 = format_Population_Distribution_ColomboDistrict_Census2012_SL_1.readFeatures(json_Population_Distribution_ColomboDistrict_Census2012_SL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population_Distribution_ColomboDistrict_Census2012_SL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Population_Distribution_ColomboDistrict_Census2012_SL_1.addFeatures(features_Population_Distribution_ColomboDistrict_Census2012_SL_1);
var lyr_Population_Distribution_ColomboDistrict_Census2012_SL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Population_Distribution_ColomboDistrict_Census2012_SL_1, 
                style: style_Population_Distribution_ColomboDistrict_Census2012_SL_1,
                popuplayertitle: "Population_Distribution_ColomboDistrict_Census2012_SL",
                interactive: true,
    title: 'Population_Distribution_ColomboDistrict_Census2012_SL<br />\
    <img src="styles/legend/Population_Distribution_ColomboDistrict_Census2012_SL_1_0.png" /> 430 - 1450<br />\
    <img src="styles/legend/Population_Distribution_ColomboDistrict_Census2012_SL_1_1.png" /> 1450 - 2289<br />\
    <img src="styles/legend/Population_Distribution_ColomboDistrict_Census2012_SL_1_2.png" /> 2289 - 3401<br />\
    <img src="styles/legend/Population_Distribution_ColomboDistrict_Census2012_SL_1_3.png" /> 3401 - 5343<br />\
    <img src="styles/legend/Population_Distribution_ColomboDistrict_Census2012_SL_1_4.png" /> 5343 - 27309<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Population_Distribution_ColomboDistrict_Census2012_SL_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Population_Distribution_ColomboDistrict_Census2012_SL_1];
lyr_Population_Distribution_ColomboDistrict_Census2012_SL_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_N': 'DISTRICT_N', 'DISTRICT_C': 'DISTRICT_C', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_C': 'GND_C', 'TP': 'TP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'AGE_U_18': 'AGE_U_18', 'AGE_O_18': 'AGE_O_18', 'HOUS_UNITS': 'HOUS_UNITS', 'COLL_LIV_Q': 'COLL_LIV_Q', 'INSTITUTE': 'INSTITUTE', 'NON_HOUS': 'NON_HOUS', 'AREA_HA_': 'AREA_HA_', 'P_DENSITY': 'P_DENSITY', 'P__DEN': 'P__DEN', 'Pop_2012': 'Pop_2012', 'Pop_Growth': 'Pop_Growth', 'Pop_Densit': 'Pop_Densit', 'Emp_Pop': 'Emp_Pop', 'Unemp_Pop': 'Unemp_Pop', 'Ec_Inac_Po': 'Ec_Inac_Po', 'Tot_Labor': 'Tot_Labor', 'Tot_Edu': 'Tot_Edu', 'Prim_Edu': 'Prim_Edu', 'Sec_Edu': 'Sec_Edu', 'OL_Edu': 'OL_Edu', 'AL_Edu': 'AL_Edu', 'Deg_nd_Edu': 'Deg_nd_Edu', 'No_Scl_Edu': 'No_Scl_Edu', 'Tot_Emp': 'Tot_Emp', 'Gov_Emp': 'Gov_Emp', 'SGov_Emp': 'SGov_Emp', 'PriS_Emp': 'PriS_Emp', 'Emp_er_Emp': 'Emp_er_Emp', 'OwnA_F_Emp': 'OwnA_F_Emp', 'Un_PF_Emp': 'Un_PF_Emp', 'Tot_Ten': 'Tot_Ten', 'Owned_Ten': 'Owned_Ten', 'ReLe_G_Ten': 'ReLe_G_Ten', 'ReLe_P_Ten': 'ReLe_P_Ten', 'Re_Fre_Ten': 'Re_Fre_Ten', 'Ench_Ten': 'Ench_Ten', 'Other_Ten': 'Other_Ten', 'Si1_hou': 'Si1_hou', 'Si2_hou': 'Si2_hou', 'Si2plu_hou': 'Si2plu_hou', 'Annex_hou': 'Annex_hou', 'Flat_hou': 'Flat_hou', 'Cond_hou': 'Cond_hou', 'Twin_hou': 'Twin_hou', 'R_Li_hou': 'R_Li_hou', 'Shanty_hou': 'Shanty_hou', 'Tot_hou': 'Tot_hou', 'les_15_age': 'les_15_age', '15_59_age': '15_59_age', '60n_ab_age': '60n_ab_age', 'Tot_po_age': 'Tot_po_age', 'Gov_SGov': 'Gov_SGov', 'Temp_Ten': 'Temp_Ten', 'Pop_Den_Ha': 'Pop_Den_Ha', 'Net_Densit': 'Net_Densit', 'House_Dens': 'House_Dens', 'grow': 'grow', });
lyr_Population_Distribution_ColomboDistrict_Census2012_SL_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_C': 'TextEdit', 'TP': 'TextEdit', 'MALE': 'TextEdit', 'FEMALE': 'TextEdit', 'AGE_U_18': 'TextEdit', 'AGE_O_18': 'TextEdit', 'HOUS_UNITS': 'TextEdit', 'COLL_LIV_Q': 'TextEdit', 'INSTITUTE': 'TextEdit', 'NON_HOUS': 'TextEdit', 'AREA_HA_': 'TextEdit', 'P_DENSITY': 'TextEdit', 'P__DEN': 'TextEdit', 'Pop_2012': 'Range', 'Pop_Growth': 'TextEdit', 'Pop_Densit': 'TextEdit', 'Emp_Pop': 'Range', 'Unemp_Pop': 'Range', 'Ec_Inac_Po': 'Range', 'Tot_Labor': 'TextEdit', 'Tot_Edu': 'Range', 'Prim_Edu': 'Range', 'Sec_Edu': 'Range', 'OL_Edu': 'Range', 'AL_Edu': 'Range', 'Deg_nd_Edu': 'Range', 'No_Scl_Edu': 'Range', 'Tot_Emp': 'Range', 'Gov_Emp': 'Range', 'SGov_Emp': 'Range', 'PriS_Emp': 'Range', 'Emp_er_Emp': 'Range', 'OwnA_F_Emp': 'Range', 'Un_PF_Emp': 'Range', 'Tot_Ten': 'Range', 'Owned_Ten': 'Range', 'ReLe_G_Ten': 'Range', 'ReLe_P_Ten': 'Range', 'Re_Fre_Ten': 'Range', 'Ench_Ten': 'Range', 'Other_Ten': 'Range', 'Si1_hou': 'Range', 'Si2_hou': 'Range', 'Si2plu_hou': 'Range', 'Annex_hou': 'Range', 'Flat_hou': 'Range', 'Cond_hou': 'Range', 'Twin_hou': 'Range', 'R_Li_hou': 'Range', 'Shanty_hou': 'Range', 'Tot_hou': 'Range', 'les_15_age': 'Range', '15_59_age': 'Range', '60n_ab_age': 'Range', 'Tot_po_age': 'Range', 'Gov_SGov': 'Range', 'Temp_Ten': 'Range', 'Pop_Den_Ha': 'TextEdit', 'Net_Densit': 'TextEdit', 'House_Dens': 'TextEdit', 'grow': 'TextEdit', });
lyr_Population_Distribution_ColomboDistrict_Census2012_SL_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'PROVINCE_C': 'no label', 'DISTRICT_N': 'no label', 'DISTRICT_C': 'no label', 'DSD_N': 'no label', 'DSD_C': 'no label', 'GND_N': 'no label', 'GND_C': 'no label', 'TP': 'no label', 'MALE': 'no label', 'FEMALE': 'no label', 'AGE_U_18': 'no label', 'AGE_O_18': 'no label', 'HOUS_UNITS': 'no label', 'COLL_LIV_Q': 'no label', 'INSTITUTE': 'no label', 'NON_HOUS': 'no label', 'AREA_HA_': 'no label', 'P_DENSITY': 'no label', 'P__DEN': 'no label', 'Pop_2012': 'no label', 'Pop_Growth': 'no label', 'Pop_Densit': 'no label', 'Emp_Pop': 'no label', 'Unemp_Pop': 'no label', 'Ec_Inac_Po': 'no label', 'Tot_Labor': 'no label', 'Tot_Edu': 'no label', 'Prim_Edu': 'no label', 'Sec_Edu': 'no label', 'OL_Edu': 'no label', 'AL_Edu': 'no label', 'Deg_nd_Edu': 'no label', 'No_Scl_Edu': 'no label', 'Tot_Emp': 'no label', 'Gov_Emp': 'no label', 'SGov_Emp': 'no label', 'PriS_Emp': 'no label', 'Emp_er_Emp': 'no label', 'OwnA_F_Emp': 'no label', 'Un_PF_Emp': 'no label', 'Tot_Ten': 'no label', 'Owned_Ten': 'no label', 'ReLe_G_Ten': 'no label', 'ReLe_P_Ten': 'no label', 'Re_Fre_Ten': 'no label', 'Ench_Ten': 'no label', 'Other_Ten': 'no label', 'Si1_hou': 'no label', 'Si2_hou': 'no label', 'Si2plu_hou': 'no label', 'Annex_hou': 'no label', 'Flat_hou': 'no label', 'Cond_hou': 'no label', 'Twin_hou': 'no label', 'R_Li_hou': 'no label', 'Shanty_hou': 'no label', 'Tot_hou': 'no label', 'les_15_age': 'no label', '15_59_age': 'no label', '60n_ab_age': 'no label', 'Tot_po_age': 'no label', 'Gov_SGov': 'no label', 'Temp_Ten': 'no label', 'Pop_Den_Ha': 'no label', 'Net_Densit': 'no label', 'House_Dens': 'no label', 'grow': 'no label', });
lyr_Population_Distribution_ColomboDistrict_Census2012_SL_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});