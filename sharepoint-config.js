/*
  Configuration côté navigateur pour l'export SharePoint AINM.
  Ne jamais mettre de secret Microsoft ici.
*/
window.SHAREPOINT_EXPORT_CONFIG = {
  enabled: true,
  supabaseFunctionUrl: 'https://VOTRE_PROJECT_REF.supabase.co/functions/v1/upload-sharepoint',
  supabaseAnonKey: 'VOTRE_CLE_SUPABASE_ANON_OU_PUBLISHABLE',
  defaultChantierKey: 'f-62037-rct-750-000',
  chantierList: [
  {
    "key": "f-62037-rct-750-000",
    "name": "F_62037_RCT_(750 000)",
    "pole": "PCLE",
    "folderName": "F_62037_RCT_(750 000)"
  },
  {
    "key": "f-63594-relevement-vitesse",
    "name": "F_63594_RELEVEMENT_VITESSE",
    "pole": "PCLE",
    "folderName": "F_63594_RELEVEMENT_VITESSE"
  },
  {
    "key": "f-63598-sst-cepoy-750000",
    "name": "F_63598_SST_CEPOY_750000",
    "pole": "PCLE",
    "folderName": "F_63598_SST_CEPOY_750000"
  },
  {
    "key": "f-63598-sst-souppe-750000",
    "name": "F_63598_SST_SOUPPE_750000",
    "pole": "PCLE",
    "folderName": "F_63598_SST_SOUPPE_750000"
  },
  {
    "key": "f-63598-sst-thomery-830000",
    "name": "F_63598_SST_THOMERY_830000",
    "pole": "PCLE",
    "folderName": "F_63598_SST_THOMERY_830000"
  },
  {
    "key": "f-63599-pmp-amilly-750000",
    "name": "F_63599_PMP_AMILLY_750000",
    "pole": "PCLE",
    "folderName": "F_63599_PMP_AMILLY_750000"
  },
  {
    "key": "f-63599-pmp-chalette-750000",
    "name": "F_63599_PMP_CHALETTE_750000",
    "pole": "PCLE",
    "folderName": "F_63599_PMP_CHALETTE_750000"
  },
  {
    "key": "f-63599-pmp-fontenay-750000",
    "name": "F_63599_PMP_FONTENAY_750000",
    "pole": "PCLE",
    "folderName": "F_63599_PMP_FONTENAY_750000"
  },
  {
    "key": "f-63599-pmp-garenne-750000",
    "name": "F_63599_PMP_GARENNE_750000",
    "pole": "PCLE",
    "folderName": "F_63599_PMP_GARENNE_750000"
  },
  {
    "key": "f-63599-pmp-le-betz-dordive-750000",
    "name": "F_63599_PMP_LE-BETZ-DORDIVE_750000",
    "pole": "PCLE",
    "folderName": "F_63599_PMP_LE-BETZ-DORDIVE_750000"
  },
  {
    "key": "f-63599-pmp-nemours-750000",
    "name": "F_63599_PMP_NEMOURS_750000",
    "pole": "PCLE",
    "folderName": "F_63599_PMP_NEMOURS_750000"
  },
  {
    "key": "f-64710-sst-samois-830000",
    "name": "F_64710_SST_SAMOIS_830000",
    "pole": "PCLE",
    "folderName": "F_64710_SST_SAMOIS_830000"
  },
  {
    "key": "f-64711-sst-montereau-830000",
    "name": "F_64711_SST_MONTEREAU_830000",
    "pole": "PCLE",
    "folderName": "F_64711_SST_MONTEREAU_830000"
  },
  {
    "key": "f-64711-sst-samoreau-746000",
    "name": "F_64711_SST_SAMOREAU_746000",
    "pole": "PCLE",
    "folderName": "F_64711_SST_SAMOREAU_746000"
  },
  {
    "key": "f-64711-sst-st-mammes-830000",
    "name": "F_64711_SST_ST_MAMMES_830000",
    "pole": "PCLE",
    "folderName": "F_64711_SST_ST_MAMMES_830000"
  },
  {
    "key": "f-64712-pmp-avon-830000",
    "name": "F_64712_PMP_AVON_830000",
    "pole": "PCLE",
    "folderName": "F_64712_PMP_AVON_830000"
  },
  {
    "key": "f-64713-pmp-champagne-746000",
    "name": "F_64713_PMP_CHAMPAGNE_746000",
    "pole": "PCLE",
    "folderName": "F_64713_PMP_CHAMPAGNE_746000"
  },
  {
    "key": "f-64714-sst-bois-le-roi-830000",
    "name": "F_64714_SST_BOIS_LE_ROI_830000",
    "pole": "PCLE",
    "folderName": "F_64714_SST_BOIS_LE_ROI_830000"
  },
  {
    "key": "f-64717-sst-varennes-746000",
    "name": "F_64717_SST_VARENNES_746000",
    "pole": "PCLE",
    "folderName": "F_64717_SST_VARENNES_746000"
  },
  {
    "key": "f-66817-pancartes",
    "name": "F_66817_PANCARTES",
    "pole": "PCLE",
    "folderName": "F_66817_PANCARTES"
  },
  {
    "key": "f-66846-rct-p1",
    "name": "F_66846_RCT_P1",
    "pole": "PCLE",
    "folderName": "F_66846_RCT_P1"
  },
  {
    "key": "f-66859-rct-p2",
    "name": "F_66859_RCT_P2",
    "pole": "PCLE",
    "folderName": "F_66859_RCT_P2"
  },
  {
    "key": "f-alq-fontaine-le-port-746000",
    "name": "F_ALQ_FONTAINE_LE_PORT_746000",
    "pole": "PCLE",
    "folderName": "F_ALQ_FONTAINE_LE_PORT_746000"
  },
  {
    "key": "vs-montereau",
    "name": "VS_MONTEREAU",
    "pole": "PCLE",
    "folderName": "VS_MONTEREAU"
  },
  {
    "key": "livrables",
    "name": "Livrables",
    "pole": "PCLE",
    "folderName": "Livrables"
  },
  {
    "key": "plans-cuivre-fo-pcle",
    "name": "Plans Cuivre Fo PCLE",
    "pole": "PCLE",
    "folderName": "Plans Cuivre Fo PCLE"
  }
],
  chantierAliases: {
  "F_62037_RCT_(750 000)": "f-62037-rct-750-000",
  "f-62037-rct-750-000": "f-62037-rct-750-000",
  "F_63594_RELEVEMENT_VITESSE": "f-63594-relevement-vitesse",
  "f-63594-relevement-vitesse": "f-63594-relevement-vitesse",
  "F_63598_SST_CEPOY_750000": "f-63598-sst-cepoy-750000",
  "f-63598-sst-cepoy-750000": "f-63598-sst-cepoy-750000",
  "F_63598_SST_SOUPPE_750000": "f-63598-sst-souppe-750000",
  "f-63598-sst-souppe-750000": "f-63598-sst-souppe-750000",
  "F_63598_SST_THOMERY_830000": "f-63598-sst-thomery-830000",
  "f-63598-sst-thomery-830000": "f-63598-sst-thomery-830000",
  "F_63599_PMP_AMILLY_750000": "f-63599-pmp-amilly-750000",
  "f-63599-pmp-amilly-750000": "f-63599-pmp-amilly-750000",
  "F_63599_PMP_CHALETTE_750000": "f-63599-pmp-chalette-750000",
  "f-63599-pmp-chalette-750000": "f-63599-pmp-chalette-750000",
  "F_63599_PMP_FONTENAY_750000": "f-63599-pmp-fontenay-750000",
  "f-63599-pmp-fontenay-750000": "f-63599-pmp-fontenay-750000",
  "F_63599_PMP_GARENNE_750000": "f-63599-pmp-garenne-750000",
  "f-63599-pmp-garenne-750000": "f-63599-pmp-garenne-750000",
  "F_63599_PMP_LE-BETZ-DORDIVE_750000": "f-63599-pmp-le-betz-dordive-750000",
  "f-63599-pmp-le-betz-dordive-750000": "f-63599-pmp-le-betz-dordive-750000",
  "F_63599_PMP_NEMOURS_750000": "f-63599-pmp-nemours-750000",
  "f-63599-pmp-nemours-750000": "f-63599-pmp-nemours-750000",
  "F_64710_SST_SAMOIS_830000": "f-64710-sst-samois-830000",
  "f-64710-sst-samois-830000": "f-64710-sst-samois-830000",
  "F_64711_SST_MONTEREAU_830000": "f-64711-sst-montereau-830000",
  "f-64711-sst-montereau-830000": "f-64711-sst-montereau-830000",
  "F_64711_SST_SAMOREAU_746000": "f-64711-sst-samoreau-746000",
  "f-64711-sst-samoreau-746000": "f-64711-sst-samoreau-746000",
  "F_64711_SST_ST_MAMMES_830000": "f-64711-sst-st-mammes-830000",
  "f-64711-sst-st-mammes-830000": "f-64711-sst-st-mammes-830000",
  "F_64712_PMP_AVON_830000": "f-64712-pmp-avon-830000",
  "f-64712-pmp-avon-830000": "f-64712-pmp-avon-830000",
  "F_64713_PMP_CHAMPAGNE_746000": "f-64713-pmp-champagne-746000",
  "f-64713-pmp-champagne-746000": "f-64713-pmp-champagne-746000",
  "F_64714_SST_BOIS_LE_ROI_830000": "f-64714-sst-bois-le-roi-830000",
  "f-64714-sst-bois-le-roi-830000": "f-64714-sst-bois-le-roi-830000",
  "F_64717_SST_VARENNES_746000": "f-64717-sst-varennes-746000",
  "f-64717-sst-varennes-746000": "f-64717-sst-varennes-746000",
  "F_66817_PANCARTES": "f-66817-pancartes",
  "f-66817-pancartes": "f-66817-pancartes",
  "F_66846_RCT_P1": "f-66846-rct-p1",
  "f-66846-rct-p1": "f-66846-rct-p1",
  "F_66859_RCT_P2": "f-66859-rct-p2",
  "f-66859-rct-p2": "f-66859-rct-p2",
  "F_ALQ_FONTAINE_LE_PORT_746000": "f-alq-fontaine-le-port-746000",
  "f-alq-fontaine-le-port-746000": "f-alq-fontaine-le-port-746000",
  "VS_MONTEREAU": "vs-montereau",
  "vs-montereau": "vs-montereau",
  "Livrables": "livrables",
  "livrables": "livrables",
  "Plans Cuivre Fo PCLE": "plans-cuivre-fo-pcle",
  "plans-cuivre-fo-pcle": "plans-cuivre-fo-pcle"
},
  chantierFolderUrls: {
  "f-62037-rct-750-000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_62037_RCT_(750%20000)/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63594-relevement-vitesse": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63594_RELEVEMENT_VITESSE/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63598-sst-cepoy-750000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63598_SST_CEPOY_750000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63598-sst-souppe-750000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63598_SST_SOUPPE_750000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63598-sst-thomery-830000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63598_SST_THOMERY_830000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63599-pmp-amilly-750000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63599_PMP_AMILLY_750000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63599-pmp-chalette-750000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63599_PMP_CHALETTE_750000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63599-pmp-fontenay-750000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63599_PMP_FONTENAY_750000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63599-pmp-garenne-750000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63599_PMP_GARENNE_750000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63599-pmp-le-betz-dordive-750000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63599_PMP_LE-BETZ-DORDIVE_750000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-63599-pmp-nemours-750000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_63599_PMP_NEMOURS_750000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-64710-sst-samois-830000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_64710_SST_SAMOIS_830000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-64711-sst-montereau-830000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_64711_SST_MONTEREAU_830000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-64711-sst-samoreau-746000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_64711_SST_SAMOREAU_746000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-64711-sst-st-mammes-830000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_64711_SST_ST_MAMMES_830000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-64712-pmp-avon-830000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_64712_PMP_AVON_830000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-64713-pmp-champagne-746000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_64713_PMP_CHAMPAGNE_746000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-64714-sst-bois-le-roi-830000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_64714_SST_BOIS_LE_ROI_830000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-64717-sst-varennes-746000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_64717_SST_VARENNES_746000/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-66817-pancartes": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_66817_PANCARTES/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-66846-rct-p1": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_66846_RCT_P1/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-66859-rct-p2": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_66859_RCT_P2/23_SQE/05_BRIEFING?csf=1&web=1",
  "f-alq-fontaine-le-port-746000": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/F_ALQ_FONTAINE_LE_PORT_746000/23_SQE/05_BRIEFING?csf=1&web=1",
  "vs-montereau": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/VS_MONTEREAU/23_SQE/05_BRIEFING?csf=1&web=1",
  "livrables": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/Livrables/23_SQE/05_BRIEFING?csf=1&web=1",
  "plans-cuivre-fo-pcle": "https://sncf.sharepoint.com/:f:/r/sites/UO_Travaux_IPSEGrpO365/09%20ANMR/00_PROJET/MMM-PCLE/PCLE/Plans%20Cuivre%20Fo%20PCLE/23_SQE/05_BRIEFING?csf=1&web=1"
}
};
