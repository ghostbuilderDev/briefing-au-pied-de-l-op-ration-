/*
  Configuration navigateur - Export SharePoint AINM.
  Aucun secret Microsoft ici.
  Fichier à placer à la racine GitHub, au même niveau que index.html.
*/

(function(){
  const SUPABASE_PROJECT_REF = 'mrqxazwipawkdmxwhssr';
  const SUPABASE_PROJECT_URL = 'https://mrqxazwipawkdmxwhssr.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_GVA0gxGRECTC-44666Ev6g_tRXeCPbz';
  const UPLOAD_FUNCTION_URL = SUPABASE_PROJECT_URL + '/functions/v1/upload-sharepoint';

  const chantierList = [
    { key:'f-62037-rct-750-000', name:'F_62037_RCT_(750 000)', pole:'PCLE', folderName:'F_62037_RCT_(750 000)' },
    { key:'f-63594-relevement-vitesse', name:'F_63594_RELEVEMENT_VITESSE', pole:'PCLE', folderName:'F_63594_RELEVEMENT_VITESSE' },
    { key:'f-63598-sst-cepoy-750000', name:'F_63598_SST_CEPOY_750000', pole:'PCLE', folderName:'F_63598_SST_CEPOY_750000' },
    { key:'f-63598-sst-souppe-750000', name:'F_63598_SST_SOUPPE_750000', pole:'PCLE', folderName:'F_63598_SST_SOUPPE_750000' },
    { key:'f-63598-sst-thomery-830000', name:'F_63598_SST_THOMERY_830000', pole:'PCLE', folderName:'F_63598_SST_THOMERY_830000' },
    { key:'f-63599-pmp-amilly-750000', name:'F_63599_PMP_AMILLY_750000', pole:'PCLE', folderName:'F_63599_PMP_AMILLY_750000' },
    { key:'f-63599-pmp-chalette-750000', name:'F_63599_PMP_CHALETTE_750000', pole:'PCLE', folderName:'F_63599_PMP_CHALETTE_750000' },
    { key:'f-63599-pmp-fontenay-750000', name:'F_63599_PMP_FONTENAY_750000', pole:'PCLE', folderName:'F_63599_PMP_FONTENAY_750000' },
    { key:'f-63599-pmp-garenne-750000', name:'F_63599_PMP_GARENNE_750000', pole:'PCLE', folderName:'F_63599_PMP_GARENNE_750000' },
    { key:'f-63599-pmp-le-betz-dordive-750000', name:'F_63599_PMP_LE-BETZ-DORDIVE_750000', pole:'PCLE', folderName:'F_63599_PMP_LE-BETZ-DORDIVE_750000' },
    { key:'f-63599-pmp-nemours-750000', name:'F_63599_PMP_NEMOURS_750000', pole:'PCLE', folderName:'F_63599_PMP_NEMOURS_750000' },
    { key:'f-64710-sst-samois-830000', name:'F_64710_SST_SAMOIS_830000', pole:'PCLE', folderName:'F_64710_SST_SAMOIS_830000' },
    { key:'f-64711-sst-montereau-830000', name:'F_64711_SST_MONTEREAU_830000', pole:'PCLE', folderName:'F_64711_SST_MONTEREAU_830000' },
    { key:'f-64711-sst-samoreau-746000', name:'F_64711_SST_SAMOREAU_746000', pole:'PCLE', folderName:'F_64711_SST_SAMOREAU_746000' },
    { key:'f-64711-sst-st-mammes-830000', name:'F_64711_SST_ST_MAMMES_830000', pole:'PCLE', folderName:'F_64711_SST_ST_MAMMES_830000' },
    { key:'f-64712-pmp-avon-830000', name:'F_64712_PMP_AVON_830000', pole:'PCLE', folderName:'F_64712_PMP_AVON_830000' },
    { key:'f-64713-pmp-champagne-746000', name:'F_64713_PMP_CHAMPAGNE_746000', pole:'PCLE', folderName:'F_64713_PMP_CHAMPAGNE_746000' },
    { key:'f-64714-sst-bois-le-roi-830000', name:'F_64714_SST_BOIS_LE_ROI_830000', pole:'PCLE', folderName:'F_64714_SST_BOIS_LE_ROI_830000' },
    { key:'f-64717-sst-varennes-746000', name:'F_64717_SST_VARENNES_746000', pole:'PCLE', folderName:'F_64717_SST_VARENNES_746000' },
    { key:'f-66817-pancartes', name:'F_66817_PANCARTES', pole:'PCLE', folderName:'F_66817_PANCARTES' },
    { key:'f-66846-rct-p1', name:'F_66846_RCT_P1', pole:'PCLE', folderName:'F_66846_RCT_P1' },
    { key:'f-66859-rct-p2', name:'F_66859_RCT_P2', pole:'PCLE', folderName:'F_66859_RCT_P2' },
    { key:'f-alq-fontaine-le-port-746000', name:'F_ALQ_FONTAINE_LE_PORT_746000', pole:'PCLE', folderName:'F_ALQ_FONTAINE_LE_PORT_746000' },
    { key:'vs-montereau', name:'VS_MONTEREAU', pole:'PCLE', folderName:'VS_MONTEREAU' }
  ];

  const chantierAliases = {};
  chantierList.forEach(ch => {
    chantierAliases[ch.name] = ch.key;
    chantierAliases[ch.folderName] = ch.key;
  });

  window.SHAREPOINT_EXPORT_CONFIG = {
    enabled: true,
    supabaseProjectRef: SUPABASE_PROJECT_REF,
    supabaseProjectUrl: SUPABASE_PROJECT_URL,
    supabaseFunctionUrl: UPLOAD_FUNCTION_URL,
    supabaseAnonKey: SUPABASE_ANON_KEY,
    defaultChantierKey: 'f-62037-rct-750-000',
    chantierList,
    chantierAliases,
    chantierFolderUrls: {
      'f-62037-rct-750-000': 'https://sncf.sharepoint.com/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_62037_RCT_(750%20000)/23_SQE/05_BRIEFING?web=1'
    }
  };

  // Compatibilité avec d'anciennes versions de index.html.
  window.SHAREPOINT_UPLOAD_FUNCTION_URL = UPLOAD_FUNCTION_URL;
  window.SUPABASE_UPLOAD_FUNCTION_URL = UPLOAD_FUNCTION_URL;
  window.SUPABASE_URL = SUPABASE_PROJECT_URL;
  window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
})();
