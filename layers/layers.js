var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_departements_1 = new ol.format.GeoJSON();
var features_departements_1 = format_departements_1.readFeatures(json_departements_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departements_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departements_1.addFeatures(features_departements_1);
var lyr_departements_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_departements_1, 
                style: style_departements_1,
                interactive: true,
                title: '<img src="styles/legend/departements_1.png" /> departements'
            });
var format_rbal_auvergne_2 = new ol.format.GeoJSON();
var features_rbal_auvergne_2 = format_rbal_auvergne_2.readFeatures(json_rbal_auvergne_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbal_auvergne_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbal_auvergne_2.addFeatures(features_rbal_auvergne_2);
var lyr_rbal_auvergne_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rbal_auvergne_2, 
                style: style_rbal_auvergne_2,
                interactive: true,
                title: '<img src="styles/legend/rbal_auvergne_2.png" /> rbal_auvergne'
            });

lyr_OSMStandard_0.setVisible(true);lyr_departements_1.setVisible(true);lyr_rbal_auvergne_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_departements_1,lyr_rbal_auvergne_2];
lyr_departements_1.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'nom_m': 'nom_m', 'nom': 'nom', 'insee_dep': 'insee_dep', 'insee_reg': 'insee_reg', });
lyr_rbal_auvergne_2.set('fieldAliases', {'gid': 'gid', 'sro': 'sro', 'nro': 'nro', 'noe_nblr': 'noe_nblr', 'nb_hab': 'nb_hab', 'nb_pro': 'nb_pro', 'nb_pr_ftth': 'nb_pr_ftth', 'nb_pr_ftte': 'nb_pr_ftte', 'ad_adrkey': 'ad_adrkey', 'ad_voiekey': 'ad_voiekey', 'adr_num': 'adr_num', 'adr_voie': 'adr_voie', 'adr_cplt': 'adr_cplt', 'adr_insee': 'adr_insee', 'adr_ville': 'adr_ville', 'adr_cp': 'adr_cp', 'sf_etage': 'sf_etage', 'sf_escal': 'sf_escal', 'ad_nombat': 'ad_nombat', 'ad_imneuf': 'ad_imneuf', 'ad_code': 'ad_code', 'noe_codext': 'noe_codext', 'rac_dem': 'rac_dem', 'ad_gest': 'ad_gest', 'obs': 'obs', 'noe_type': 'noe_type', 'date_modif': 'date_modif', 'modif_par': 'modif_par', 'statut': 'statut', 'noe_pose': 'noe_pose', 'hexacle_origine': 'hexacle_origine', 'affectation_hexacle': 'affectation_hexacle', 'nbre_bal_parcelle': 'nbre_bal_parcelle', 'id_parcelle': 'id_parcelle', 'rto': 'rto', 'dce': 'dce', 'type_site': 'type_site', });
lyr_departements_1.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'nom_m': 'TextEdit', 'nom': 'TextEdit', 'insee_dep': 'TextEdit', 'insee_reg': 'TextEdit', });
lyr_rbal_auvergne_2.set('fieldImages', {'gid': '', 'sro': '', 'nro': '', 'noe_nblr': '', 'nb_hab': '', 'nb_pro': '', 'nb_pr_ftth': '', 'nb_pr_ftte': '', 'ad_adrkey': '', 'ad_voiekey': '', 'adr_num': '', 'adr_voie': '', 'adr_cplt': '', 'adr_insee': '', 'adr_ville': '', 'adr_cp': '', 'sf_etage': '', 'sf_escal': '', 'ad_nombat': '', 'ad_imneuf': '', 'ad_code': '', 'noe_codext': '', 'rac_dem': '', 'ad_gest': '', 'obs': '', 'noe_type': '', 'date_modif': '', 'modif_par': '', 'statut': '', 'noe_pose': '', 'hexacle_origine': '', 'affectation_hexacle': '', 'nbre_bal_parcelle': '', 'id_parcelle': '', 'rto': '', 'dce': '', 'type_site': '', });
lyr_departements_1.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'nom_m': 'no label', 'nom': 'no label', 'insee_dep': 'no label', 'insee_reg': 'no label', });
lyr_rbal_auvergne_2.set('fieldLabels', {'gid': 'no label', 'sro': 'no label', 'nro': 'no label', 'noe_nblr': 'no label', 'nb_hab': 'no label', 'nb_pro': 'no label', 'nb_pr_ftth': 'no label', 'nb_pr_ftte': 'no label', 'ad_adrkey': 'no label', 'ad_voiekey': 'no label', 'adr_num': 'no label', 'adr_voie': 'no label', 'adr_cplt': 'no label', 'adr_insee': 'no label', 'adr_ville': 'no label', 'adr_cp': 'no label', 'sf_etage': 'no label', 'sf_escal': 'no label', 'ad_nombat': 'no label', 'ad_imneuf': 'no label', 'ad_code': 'no label', 'noe_codext': 'no label', 'rac_dem': 'no label', 'ad_gest': 'no label', 'obs': 'no label', 'noe_type': 'no label', 'date_modif': 'no label', 'modif_par': 'no label', 'statut': 'no label', 'noe_pose': 'no label', 'hexacle_origine': 'no label', 'affectation_hexacle': 'no label', 'nbre_bal_parcelle': 'no label', 'id_parcelle': 'no label', 'rto': 'no label', 'dce': 'no label', 'type_site': 'no label', });
lyr_rbal_auvergne_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});