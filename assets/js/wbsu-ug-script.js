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
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGACOR08T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGACOR09T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGACOR10T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGACOR11T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGACOR12T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGACOR13T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGACOR14T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGADSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGADSE04T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGADSE05T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGADSE06T-2022.pdf",

    ],

    "BNGG": [

        "BNGGCOR01T-2022.pdf",  //-vhq
        "BNGGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGGDSE04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGGGEC02T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\BNGLCOR02T-2022.pdf",

    ],

    "CEMA": [

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\CEMADSE06T-2022.pdf",

    ],

    "CEMG": [

        "CEMGCOR01T-2022.pdf",  //-vhq
        "CEMGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\CEMGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\CEMGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\CEMGDSE04T-2022.pdf",

    ],

    "CMAG": [

        "CMAGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\CMAGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\CMAGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\CMAGDSE04T-2022.pdf",

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
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ECOGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ECOGDSE01T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ECOGDSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ECOGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ECOGGEC02T-2022.pdf",

    ],

    "EDCA": [

        "EDCA-6-2022.pdf",  //-vhq
        "EDCA-8-2022.pdf",  //-vhq
        "EDCA-5-2022.pdf",  //-vhq

        "EDCACOR02T-2022.pdf",  //-vhq
        "EDCACOR03T-2022.pdf",  //-vhq
        "EDCACOR04T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCACOR08T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCACOR09T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCACOR10T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCACOR11T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCACOR12T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCACOR13T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCACOR14T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCADSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCADSE04T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCADSE05T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCADSE06T-2022.pdf",

    ],

    "EDCG": [

        "EDCGCOR01T-2022.pdf",  //-vhq
        "EDCGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCGDSE04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EDCGGEC02T-2022.pdf",

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
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGACOR09T-2022.pdf",
        "ENGACOR10T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGACOR11T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGACOR12T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGACOR13T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGACOR14T-2022.pdf",

        "ENGADSE01T-2021.pdf",  //-vhq
        "ENGADSE01T-2022.pdf",  //-vhq
        "ENGADSE02T-2021.pdf",  //-vhq
        "ENGADSE02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGADSE04T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGADSE05T-2022.pdf",

    ],

    "ENGG": [

        "ENGGCOR01T-2022.pdf",  //-vhq
        "ENGGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGGDSE04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGGGEC02T-2022.pdf",

        "ENGLCOR02T-2022.pdf",  //-vhq

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\ENGMCOR02T-2022.pdf",

    ],

    "EVSG": [

        "EVSGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EVSGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EVSGDSE01T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EVSGDSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\EVSGDSE03T-2022.pdf",

    ],

    "FACA": [

        "FACA-5-2022.pdf",  //-vhq

        "FACACOR02T-2022.pdf",  //-vhq
        "FACACOR03T-2022.pdf",  //-vhq
        "FACACOR04T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACACOR08T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACACOR09T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACACOR10T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACACOR11T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACACOR12T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACACOR13T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACACOR14T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACADSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACADSE07T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACADSE08T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACADSE09T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACADSE10T-2022.pdf",

    ],

    "FACG": [

        "FACG-3-2022.pdf",  //-vhq

        "FACGCOR01T-2022.pdf",  //-vhq
        "FACGCOR02T-2022.pdf",  //-vhq
        "FACGCOR03T-2022.pdf",  //-vhq
        "FACGCOR04T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGCOR07T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGCOR08T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGDSE01T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGDSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGDSE04T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGDSE07T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGDSE08T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGDSE09T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGDSE10T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGDSE11T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACGGEC02T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACHGEC01T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACHGEC02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\FACHGEC04T-2022.pdf",

    ],

    "GEOA": [

        "GEOA-5-2022.pdf",  //-vhq
        "GEOA-6-2022.pdf",  //-vhq

        "GEOACOR02T-2022.pdf",  //-vhq
        "GEOACOR03T-2022.pdf",  //-vhq
        "GEOACOR04T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOACOR08T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOACOR09T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOACOR10T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOACOR11T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOACOR12T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOACOR13T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOACOR14T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOADSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOADSE04T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOADSE05T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOADSE06T-2022.pdf",

    ],

    "GEOG": [

        "GEOG-4-2022.pdf",  //-vhq

        "GEOGCOR01T-2022.pdf",  //-vhq
        "GEOGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\GEOGCOR04T-2022.pdf",

    ],

    "HINA": [

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HINADSE05T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HINADSE06T-2022.pdf",

    ],

    "HING": [

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HINGCOR02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HINGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HINGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HINGDSE04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HINGGEC02T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HINLCOR02T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HINSAECO1M-2022.pdf",

    ],

    "HISA": [

        "HISA-5-2022.pdf",  //-vhq
        "HISA-6-2022.pdf",  //-vhq
        "HISA-8-2022.pdf",  //-vhq

        "HISACOR02T-2022.pdf",  //-vhq
        "HISACOR03T-2022.pdf",  //-vhq
        "HISACOR04T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISACOR08T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISACOR09T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISACOR10T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISACOR11T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISACOR12T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISACOR13T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISACOR14T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISADSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISADSE04T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISADSE05T-2022.pdf",

    ],

    "HISG": [

        "HISGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISGDSE01T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISGDSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISGDSE04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\HISGGEC02T-2022.pdf",

    ],

    "MTMA": [

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\MTMACOR13T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\MTMADSE04T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\MTMADSE05T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\MTMADSE06T-2022.pdf",

    ],

    "MTMG": [

        "MTMGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\MTMGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\MTMGDSE01T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\MTMGDSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\MTMGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\MTMGDSE04T-2022.pdf",

    ],

    "PEDG": [

        "PEDGCOR01T-2022.pdf",  //-vhq
        "PEDGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PEDGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PEDGDSE01T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PEDGDSE03T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PEDGGEC02T-2022.pdf",

    ],

    "PHIA": [

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHIADSE06T-2022.pdf",

    ],

    "PHIG": [

        "PHIGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHIGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHIGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHIGDSE04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHIGGEC02T-2022.pdf",

    ],

    "PHSA": [

        "PHSACOR11T-2023.pdf",  //-lq
        "PHSACOR12T-2023.pdf",  //-lq

        "PHSADSE02T-2023.pdf",  //-lq
        "PHSADSE03T-2023.pdf",  //-lq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHSADSE05T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHSADSE06T-2022.pdf",

    ],

    "PHSG": [

        "PHSGCOR01T-2022.pdf",  //-vhq
        "PHSGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHSGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHSGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PHSGDSE04T-2022.pdf",

    ],

    "PLSA": [

        "PLSA-5-2022.pdf",  //-vhq
        "PLSA-6-2022.pdf",  //-vhq
        "PLSA-8-2022.pdf",  //-vhq

        "PLSACOR02T-2022.pdf",  //-vhq
        "PLSACOR03T-2022.pdf",  //-vhq
        "PLSACOR04T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSACOR08T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSACOR09T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSACOR10T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSACOR11T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSACOR12T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSACOR13T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSACOR14T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSADSE02T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSADSE04T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSADSE05T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSADSE06T-2022.pdf",

    ],

    "PLSG": [

        "PLSG-4-2022.pdf",  //-vhq

        "PLSGCOR01T-2022.pdf",  //-vhq
        "PLSGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSGDSE04T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\PLSGGEC02T-2022.pdf",

    ],

    "SANA": [

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\SANADSE05T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\SANADSE06T-2022.pdf",

    ],

    "SANG": [

        "SANGCOR02T-2022.pdf",  //-vhq
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\SANGCOR04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\SANGDSE03T-2022.pdf",
        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\SANGDSE04T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\SANGGEC02T-2022.pdf",

        "F:\Projects\WebProjects\exam-papers-archive\download\wbsu-ug\SANLCOR02T-2022.pdf",
        
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
