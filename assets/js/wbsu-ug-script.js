// WBSU UG

const exam_dir = "wbsu-ug";

const exam_years = [
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
];

const exam_papers = {

    "AMPW": [

        "AMPW-8-2022.pdf",  //-vhq

    ],

    "AUDA": [

        "AUDA-6-2022.pdf",  //-vhq

    ],

    "BNGA": [

        "BNGA-5-2022.pdf",  //-vhq
        "BNGA-6-2022.pdf",  //-vhq
        "BNGA-8-2022.pdf",  //-vhq

        "BNGACOR02T-2022.pdf",  //-vhq
        "BNGACOR03T-2022.pdf",  //-vhq
        "BNGACOR04T-2022.pdf",  //-vhq
        "BNGACOR08T-2022.pdf",  //-vhq
        "BNGACOR09T-2022.pdf",  //-vhq
        "BNGACOR10T-2022.pdf",  //-vhq
        "BNGACOR11T-2022.pdf",  //-vhq
        "BNGACOR12T-2022.pdf",  //-vhq
        "BNGACOR13T-2022.pdf",  //-vhq
        "BNGACOR14T-2022.pdf",  //-vhq

        "BNGADSE02T-2022.pdf",  //-vhq
        "BNGADSE04T-2022.pdf",  //-vhq
        "BNGADSE05T-2022.pdf",  //-vhq
        "BNGADSE06T-2022.pdf",  //-vhq

    ],

    "BNGG": [

        "BNGGCOR01T-2022.pdf",  //-vhq
        "BNGGCOR02T-2022.pdf",  //-vhq
        "BNGGCOR04T-2022.pdf",  //-vhq

        "BNGGDSE03T-2022.pdf",  //-vhq
        "BNGGDSE04T-2022.pdf",  //-vhq

        "BNGGGEC02T-2022.pdf",  //-vhq

        "BNGLCOR02T-2022.pdf",  //-vhq

    ],

    "CEMA": [

        "CEMADSE06T-2022.pdf",  //-vhq

    ],

    "CEMG": [

        "CEMGCOR01T-2022.pdf",  //-vhq
        "CEMGCOR02T-2022.pdf",  //-vhq
        "CEMGCOR04T-2022.pdf",  //-vhq

        "CEMGDSE03T-2022.pdf",  //-vhq
        "CEMGDSE04T-2022.pdf",  //-vhq

    ],

    "CMAG": [

        "CMAGCOR02T-2022.pdf",  //-vhq
        "CMAGCOR04T-2022.pdf",  //-vhq

        "CMAGDSE03T-2022.pdf",  //-vhq
        "CMAGDSE04T-2022.pdf",  //-vhq

    ],

    "CMSA": [

        "CMSA-1-2017.pdf",  //-vhq
        "CMSA-1-2018.pdf",  //-vhq
        "CMSA-1-2019.pdf",  //-vhq
        "CMSA-1-2021.pdf",  //-mq
        "CMSA-2A-2017.pdf",  //-vhq
        "CMSA-2A-2018.pdf",  //-vhq
        "CMSA-2A-2019.pdf",  //-vhq
        "CMSA-2A-2021.pdf",  //-lq
        "CMSA-3-2017.pdf",  //-vhq
        "CMSA-3-2018.pdf",  //-vhq
        "CMSA-3-2019.pdf",  //-vhq
        "CMSA-3-2020.pdf",  //-vhq
        "CMSA-3-2022.pdf",  //-vhq
        "CMSA-4-2020.pdf",  //-vhq
        "CMSA-4A-2017.pdf",  //-vhq
        "CMSA-4A-2018.pdf",  //-vhq
        "CMSA-4A-2019.pdf",  //-vhq
        "CMSA-4A-2022.pdf",  //-vhq
        "CMSA-5-2018.pdf",  //-vhq
        "CMSA-5-2019.pdf",  //-vhq
        "CMSA-5-2020.pdf",  //-vhq
        "CMSA-6-2018.pdf",  //-vhq
        "CMSA-6-2019.pdf",  //-vhq
        "CMSA-6-2020.pdf",  //-vhq

        "CMSACOR01T-2019.pdf",  //-lq
        "CMSACOR01T-2021.pdf",  //-vhq
        "CMSACOR01T-2022.pdf",  //-vhq
        "CMSACOR02T-2019.pdf",  //-lq
        "CMSACOR02T-2021.pdf",  //-vhq
        "CMSACOR02T-2022.pdf",  //-vhq
        "CMSACOR03T-2020.pdf",  //-vhq
        "CMSACOR03T-2021.pdf",  //-vhq
        "CMSACOR03T-2022.pdf",  //-vhq
        "CMSACOR04T-2020.pdf",  //-vhq
        "CMSACOR04T-2021.pdf",  //-vhq
        "CMSACOR04T-2022.pdf",  //-vhq
        "CMSACOR05T-2019.pdf",  //-lq
        "CMSACOR05T-2021.pdf",  //-vhq
        "CMSACOR05T-2022.pdf",  //-vhq
        "CMSACOR06T-2019.pdf",  //-lq
        "CMSACOR06T-2021.pdf",  //-vhq
        "CMSACOR06T-2022.pdf",  //-vhq
        "CMSACOR07T-2019.pdf",  //-lq
        "CMSACOR07T-2021.pdf",  //-vhq
        "CMSACOR07T-2022.pdf",  //-vhq
        "CMSACOR07T-supple-2021.pdf",  //-vhq
        "CMSACOR08T-2020.pdf",  //-vhq
        "CMSACOR08T-2021.pdf",  //-vhq
        "CMSACOR08T-2022.pdf",  //-vhq
        "CMSACOR09T-2020.pdf",  //-vhq
        "CMSACOR09T-2021.pdf",  //-vhq
        "CMSACOR09T-2022.pdf",  //-vhq
        "CMSACOR10T-2020.pdf",  //-vhq
        "CMSACOR10T-2021.pdf",  //-vhq
        "CMSACOR10T-2022.pdf",  //-vhq
        "CMSACOR11T-2021.pdf",  //-vhq
        "CMSACOR11T-2022.pdf",  //-vhq
        "CMSACOR12T-2021.pdf",  //-vhq
        "CMSACOR12T-2022.pdf",  //-vhq
        "CMSACOR13T-2021.pdf",  //-vhq
        "CMSACOR13T-2022.pdf",  //-vhq
        "CMSACOR14T-2021.pdf",  //-vhq
        "CMSACOR14T-2022.pdf",  //-vhq

        "CMSADSE01T-2021.pdf",  //-vhq
        "CMSADSE01T-2022.pdf",  //-vhq
        "CMSADSE02T-2021.pdf",  //-vhq
        "CMSADSE02T-2022.pdf",  //-vhq
        "CMSADSE03T-2021.pdf",  //-vhq
        "CMSADSE03T-2022.pdf",  //-vhq
        "CMSADSE04T-2021.pdf",  //-vhq
        "CMSADSE04T-2022.pdf",  //-vhq
        "CMSADSE05T-2021.pdf",  //-vhq
        "CMSADSE05T-2022.pdf",  //-vhq

    ],

    "CMSG": [

        "CMSG-1-2017.pdf",  //-vhq
        "CMSG-1-2018.pdf",  //-vhq
        "CMSG-1-2019.pdf",  //-vhq
        "CMSG-1-2020.pdf",  //-vhq
        "CMSG-3-2020.pdf",  //-vhq
        "CMSG-3A-2017.pdf",  //-vhq
        "CMSG-3A-2018.pdf",  //-vhq
        "CMSG-3A-2019.pdf",  //-vhq
        "CMSG-3A-2022.pdf",  //-vhq
        "CMSG-4A-2020.pdf",  //-vhq
        "CMSG-4A-2021.pdf",  //-vhq
        "CMSG-4A-2022.pdf",  //-vhq

        "CMSGCOR01T-2021.pdf",  //-vhq
        "CMSGCOR01T-2022.pdf",  //-vhq
        "CMSGCOR02T-2020.pdf",  //-vhq
        "CMSGCOR02T-2021.pdf",  //-vhq
        "CMSGCOR02T-2022.pdf",  //-vhq
        "CMSGCOR03T-2021.pdf",  //-vhq
        "CMSGCOR03T-2022.pdf",  //-vhq
        "CMSGCOR03T-supple-2021.pdf",  //-vhq
        "CMSGCOR04T-2020.pdf",  //-vhq
        "CMSGCOR04T-2021.pdf",  //-vhq
        "CMSGCOR04T-2022.pdf",  //-vhq

        "CMSGDSE01T-2021.pdf",  //-vhq
        "CMSGDSE01T-2022.pdf",  //-vhq
        "CMSGDSE02T-2021.pdf",  //-vhq
        "CMSGDSE02T-2022.pdf",  //-vhq
        "CMSGDSE03T-2021.pdf",  //-vhq
        "CMSGDSE03T-2022.pdf",  //-vhq
        "CMSGDSE04T-2021.pdf",  //-vhq
        "CMSGDSE04T-2022.pdf",  //-vhq

    ],

    "ECOG": [

        "ECOG\ECOGCOR01T-2022.pdf",  //-vhq
        "ECOGCOR02T-2022.pdf",  //-vhq
        "ECOGCOR04T-2022.pdf",  //-vhq

        "ECOGDSE01T-2022.pdf",  //-vhq
        "ECOGDSE02T-2022.pdf",  //-vhq
        "ECOGDSE03T-2022.pdf",  //-vhq
        "ECOGGEC02T-2022.pdf",  //-vhq

    ],

    "EDCA": [

        "EDCA-6-2022.pdf",  //-vhq
        "EDCA-8-2022.pdf",  //-vhq
        "EDCA-5-2022.pdf",  //-vhq

        "EDCACOR02T-2022.pdf",  //-vhq
        "EDCACOR03T-2022.pdf",  //-vhq
        "EDCACOR04T-2022.pdf",  //-vhq
        "EDCACOR08T-2022.pdf",  //-vhq
        "EDCACOR09T-2022.pdf",  //-vhq
        "EDCACOR10T-2022.pdf",  //-vhq
        "EDCACOR11T-2022.pdf",  //-vhq
        "EDCACOR12T-2022.pdf",  //-vhq
        "EDCACOR13T-2022.pdf",  //-vhq
        "EDCACOR14T-2022.pdf",  //-vhq

        "EDCADSE02T-2022.pdf",  //-vhq
        "EDCADSE04T-2022.pdf",  //-vhq
        "EDCADSE05T-2022.pdf",  //-vhq
        "EDCADSE06T-2022.pdf",  //-vhq

    ],

    "EDCG": [

        "EDCGCOR01T-2022.pdf",  //-vhq
        "EDCGCOR02T-2022.pdf",  //-vhq
        "EDCGCOR04T-2022.pdf",  //-vhq

        "EDCGDSE03T-2022.pdf",  //-vhq
        "EDCGDSE04T-2022.pdf",  //-vhq

        "EDCGGEC02T-2022.pdf",  //-vhq

    ],

    "ENGA": [

        "ENGA-6-2022.pdf",  //-vhq
        "ENGA-8-2022.pdf",  //-vhq
        "ENGA-5-2022.pdf",  //-vhq

        "ENGACOR01T-2021.pdf",  //-vhq
        "ENGACOR02T-2021.pdf",  //-vhq
        "ENGACOR02T-2022.pdf",  //-vhq
        "ENGACOR03T-2021.pdf",  //-vhq
        "ENGACOR03T-2022.pdf",  //-vhq
        "ENGACOR04T-2020.pdf",  //-vhq
        "ENGACOR04T-2021.pdf",  //-vhq
        "ENGACOR04T-2022.pdf",  //-vhq
        "ENGACOR05T-2021.pdf",  //-vhq
        "ENGACOR05T-2022.pdf",  //-vhq
        "ENGACOR06T-2021.pdf",  //-vhq
        "ENGACOR06T-2022.pdf",  //-vhq
        "ENGACOR07T-2021.pdf",  //-vhq
        "ENGACOR07T-2022.pdf",  //-vhq
        "ENGACOR08T-2021.pdf",  //-vhq
        "ENGACOR08T-2022.pdf",  //-vhq
        "ENGACOR09T-2021.pdf",  //-vhq
        "ENGACOR09T-2022.pdf",  //-vhq
        "ENGACOR10T-2022.pdf",  //-vhq
        "ENGACOR11T-2022.pdf",  //-vhq
        "ENGACOR12T-2022.pdf",  //-vhq
        "ENGACOR13T-2022.pdf",  //-vhq
        "ENGACOR14T-2022.pdf",  //-vhq

        "ENGADSE01T-2021.pdf",  //-vhq
        "ENGADSE01T-2022.pdf",  //-vhq
        "ENGADSE02T-2021.pdf",  //-vhq
        "ENGADSE02T-2022.pdf",  //-vhq
        "ENGADSE04T-2022.pdf",  //-vhq
        "ENGADSE05T-2022.pdf",  //-vhq

    ],

    "ENGG": [

        "ENGGCOR01T-2022.pdf",  //-vhq
        "ENGGCOR02T-2022.pdf",  //-vhq
        "ENGGCOR04T-2022.pdf",  //-vhq

        "ENGGDSE04T-2022.pdf",  //-vhq

        "ENGGGEC02T-2022.pdf",  //-vhq

        "ENGLCOR02T-2022.pdf",  //-vhq

        "ENGMCOR02T-2022.pdf",  //-vhq

    ],

    "EVSG": [

        "EVSGCOR02T-2022.pdf",  //-vhq
        "EVSGCOR04T-2022.pdf",  //-vhq

        "EVSGDSE01T-2022.pdf",  //-vhq
        "EVSGDSE02T-2022.pdf",  //-vhq
        "EVSGDSE03T-2022.pdf",  //-vhq

    ],

    "FACA": [

        "FACA-5-2022.pdf",  //-vhq

        "FACACOR02T-2022.pdf",  //-vhq
        "FACACOR03T-2022.pdf",  //-vhq
        "FACACOR04T-2022.pdf",  //-vhq
        "FACACOR08T-2022.pdf",  //-vhq
        "FACACOR09T-2022.pdf",  //-vhq
        "FACACOR10T-2022.pdf",  //-vhq
        "FACACOR11T-2022.pdf",  //-vhq
        "FACACOR12T-2022.pdf",  //-vhq
        "FACACOR13T-2022.pdf",  //-vhq
        "FACACOR14T-2022.pdf",  //-vhq

        "FACADSE02T-2022.pdf",  //-vhq
        "FACADSE07T-2022.pdf",  //-vhq
        "FACADSE08T-2022.pdf",  //-vhq
        "FACADSE09T-2022.pdf",  //-vhq
        "FACADSE10T-2022.pdf",  //-vhq

    ],

    "FACG": [

        "FACG-3-2022.pdf",  //-vhq

        "FACGCOR01T-2022.pdf",  //-vhq
        "FACGCOR02T-2022.pdf",  //-vhq
        "FACGCOR03T-2022.pdf",  //-vhq
        "FACGCOR04T-2022.pdf",  //-vhq
        "FACGCOR07T-2022.pdf",  //-vhq
        "FACGCOR08T-2022.pdf",  //-vhq

        "FACGDSE01T-2022.pdf",  //-vhq
        "FACGDSE02T-2022.pdf",  //-vhq
        "FACGDSE04T-2022.pdf",  //-vhq
        "FACGDSE07T-2022.pdf",  //-vhq
        "FACGDSE08T-2022.pdf",  //-vhq
        "FACGDSE09T-2022.pdf",  //-vhq
        "FACGDSE10T-2022.pdf",  //-vhq
        "FACGDSE11T-2022.pdf",  //-vhq

        "FACGGEC02T-2022.pdf",  //-vhq

        "FACHGEC01T-2022.pdf",  //-vhq
        "FACHGEC02T-2022.pdf",  //-vhq
        "FACHGEC04T-2022.pdf",  //-vhq

    ],

    "GEOA": [

        "GEOA-5-2022.pdf",  //-vhq
        "GEOA-6-2022.pdf",  //-vhq

        "GEOACOR02T-2022.pdf",  //-vhq
        "GEOACOR03T-2022.pdf",  //-vhq
        "GEOACOR04T-2022.pdf",  //-vhq
        "GEOACOR08T-2022.pdf",  //-vhq
        "GEOACOR09T-2022.pdf",  //-vhq
        "GEOACOR10T-2022.pdf",  //-vhq
        "GEOACOR11T-2022.pdf",  //-vhq
        "GEOACOR12T-2022.pdf",  //-vhq
        "GEOACOR13T-2022.pdf",  //-vhq
        "GEOACOR14T-2022.pdf",  //-vhq

        "GEOADSE02T-2022.pdf",  //-vhq
        "GEOADSE04T-2022.pdf",  //-vhq
        "GEOADSE05T-2022.pdf",  //-vhq
        "GEOADSE06T-2022.pdf",  //-vhq

    ],

    "GEOG": [

        "GEOG-4-2022.pdf",  //-vhq

        "GEOGCOR01T-2022.pdf",  //-vhq
        "GEOGCOR02T-2022.pdf",  //-vhq
        "GEOGCOR04T-2022.pdf",  //-vhq

    ],

    "HINA": [

        "HINADSE05T-2022.pdf",  //-vhq
        "HINADSE06T-2022.pdf",  //-vhq

    ],

    "HING": [

        "HINGCOR02T-2022.pdf",  //-vhq
        "HINGCOR04T-2022.pdf",  //-vhq

        "HINGDSE03T-2022.pdf",  //-vhq
        "HINGDSE04T-2022.pdf",  //-vhq

        "HINGGEC02T-2022.pdf",  //-vhq

        "HINLCOR02T-2022.pdf",  //-vhq

        "HINSAECO1M-2022.pdf",  //-vhq

    ],

    "HISA": [

        "HISA-5-2022.pdf",  //-vhq
        "HISA-6-2022.pdf",  //-vhq
        "HISA-8-2022.pdf",  //-vhq

        "HISACOR02T-2022.pdf",  //-vhq
        "HISACOR03T-2022.pdf",  //-vhq
        "HISACOR04T-2022.pdf",  //-vhq
        "HISACOR08T-2022.pdf",  //-vhq
        "HISACOR09T-2022.pdf",  //-vhq
        "HISACOR10T-2022.pdf",  //-vhq
        "HISACOR11T-2022.pdf",  //-vhq
        "HISACOR12T-2022.pdf",  //-vhq
        "HISACOR13T-2022.pdf",  //-vhq
        "HISACOR14T-2022.pdf",  //-vhq

        "HISADSE02T-2022.pdf",  //-vhq
        "HISADSE04T-2022.pdf",  //-vhq
        "HISADSE05T-2022.pdf",  //-vhq

    ],

    "HISG": [

        "HISGCOR02T-2022.pdf",  //-vhq
        "HISGCOR04T-2022.pdf",  //-vhq

        "HISGDSE01T-2022.pdf",  //-vhq
        "HISGDSE02T-2022.pdf",  //-vhq
        "HISGDSE04T-2022.pdf",  //-vhq

        "HISGGEC02T-2022.pdf",  //-vhq

    ],

    "MTMA": [

        "MTMACOR13T-2022.pdf",  //-vhq

        "MTMADSE04T-2022.pdf",  //-vhq
        "MTMADSE05T-2022.pdf",  //-vhq
        "MTMADSE06T-2022.pdf",  //-vhq

    ],

    "MTMG": [

        "MTMGCOR02T-2022.pdf",  //-vhq
        "MTMGCOR04T-2022.pdf",  //-vhq

        "MTMGDSE01T-2022.pdf",  //-vhq
        "MTMGDSE02T-2022.pdf",  //-vhq
        "MTMGDSE03T-2022.pdf",  //-vhq
        "MTMGDSE04T-2022.pdf",  //-vhq

    ],

    "PEDG": [

        "PEDGCOR01T-2022.pdf",  //-vhq
        "PEDGCOR02T-2022.pdf",  //-vhq
        "PEDGCOR04T-2022.pdf",  //-vhq

        "PEDGDSE01T-2022.pdf",  //-vhq
        "PEDGDSE03T-2022.pdf",  //-vhq

        "PEDGGEC02T-2022.pdf",  //-vhq

    ],

    "PHIA": [

        "PHIADSE06T-2022.pdf",  //-vhq

    ],

    "PHIG": [

        "PHIGCOR02T-2022.pdf",  //-vhq
        "PHIGCOR04T-2022.pdf",  //-vhq

        "PHIGDSE03T-2022.pdf",  //-vhq
        "PHIGDSE04T-2022.pdf",  //-vhq

        "PHIGGEC02T-2022.pdf",  //-vhq

    ],

    "PHSA": [

        "PHSACOR11T-2023.pdf",  //-lq
        "PHSACOR12T-2023.pdf",  //-lq

        "PHSADSE02T-2023.pdf",  //-lq
        "PHSADSE03T-2023.pdf",  //-lq
        "PHSADSE05T-2022.pdf",  //-vhq
        "PHSADSE06T-2022.pdf",  //-vhq

    ],

    "PHSG": [

        "PHSGCOR01T-2022.pdf",  //-vhq
        "PHSGCOR02T-2022.pdf",  //-vhq
        "PHSGCOR04T-2022.pdf",  //-vhq

        "PHSGDSE03T-2022.pdf",  //-vhq
        "PHSGDSE04T-2022.pdf",  //-vhq

    ],

    "PLSA": [

        "PLSA-5-2022.pdf",  //-vhq
        "PLSA-6-2022.pdf",  //-vhq
        "PLSA-8-2022.pdf",  //-vhq

        "PLSACOR02T-2022.pdf",  //-vhq
        "PLSACOR03T-2022.pdf",  //-vhq
        "PLSACOR04T-2022.pdf",  //-vhq
        "PLSACOR08T-2022.pdf",  //-vhq
        "PLSACOR09T-2022.pdf",  //-vhq
        "PLSACOR10T-2022.pdf",  //-vhq
        "PLSACOR11T-2022.pdf",  //-vhq
        "PLSACOR12T-2022.pdf",  //-vhq
        "PLSACOR13T-2022.pdf",  //-vhq
        "PLSACOR14T-2022.pdf",  //-vhq

        "PLSADSE02T-2022.pdf",  //-vhq
        "PLSADSE04T-2022.pdf",  //-vhq
        "PLSADSE05T-2022.pdf",  //-vhq
        "PLSADSE06T-2022.pdf",  //-vhq

    ],

    "PLSG": [

        "PLSG-4-2022.pdf",  //-vhq

        "PLSGCOR01T-2022.pdf",  //-vhq
        "PLSGCOR02T-2022.pdf",  //-vhq
        "PLSGCOR04T-2022.pdf",  //-vhq

        "PLSGDSE03T-2022.pdf",  //-vhq
        "PLSGDSE04T-2022.pdf",  //-vhq
        "PLSGGEC02T-2022.pdf",  //-vhq

    ],

    "SANA": [

        "SANADSE05T-2022.pdf",  //-vhq
        "SANADSE06T-2022.pdf",  //-vhq

    ],

    "SANG": [

        "SANGCOR02T-2022.pdf",  //-vhq
        "SANGCOR04T-2022.pdf",  //-vhq

        "SANGDSE03T-2022.pdf",  //-vhq
        "SANGDSE04T-2022.pdf",  //-vhq

        "SANGGEC02T-2022.pdf",  //-vhq

        "SANLCOR02T-2022.pdf",  //-vhq
        
        "SANSAEC01M-2022.pdf",  //-vhq

    ],

};

const add_search_options = (search_option_year_display, search_option_subject_display) => {
    let option;
    exam_years.reverse().forEach(year => {
        option = document.createElement("option");
        option.text = year;
        option.value = year;
        search_option_year_display.appendChild(option);
    });
    const exam_subjects = Object.keys(exam_papers);
    exam_subjects.forEach(subject => {
        option = document.createElement("option");
        option.text = subject;
        option.value = subject;
        search_option_subject_display.appendChild(option);
    });
};

const search_question_papers = (year, subject) => {
    let results = [];
    exam_papers[subject].forEach(paper => {
        if (paper.slice(-8, -4) == year)
            results.push(paper);
    });
    return results;
};

const output_search_results = (search_results_display, year, subject) => {
    const results = search_question_papers(year, subject);
    search_results_display.innerHTML =
        `<p id="search-results-info">( ${results.length} results found for ${year} ${subject} )</p>
        <div class="search-results-set">`;
    results.forEach(paper => {
        search_results_display.innerHTML +=
            `<div class="item">
            <span>${paper.slice(0, -4)}</span>
            <a href="./download/${exam_dir}/${subject}/${paper}" target="_blank">View Paper</a>
            </div>`;
    });
    search_results_display.innerHTML += `</div>`;
};

document.addEventListener("DOMContentLoaded", () => {

    const search_option_year = document.getElementById("search-option-year");
    const search_option_subject = document.getElementById("search-option-subject");
    const search_btn = document.getElementById("search-btn");
    const search_results = document.getElementById("search-results");

    add_search_options(search_option_year, search_option_subject);

    search_btn.addEventListener("click", () => {
        const year = search_option_year.value;
        const subject = search_option_subject.value;
        output_search_results(search_results, year, subject);
    });

});
