// WBSU UG

/*
quality notations
-uq: ultra high quality, text based pdf, very clean like original, no watermarks
-hq: high quality, text based pdf, not original, scanned copy, may have watermarks
-mq: medium quality, picture based pdf, decently redable, good enough
-lq: low quality, picture based pdf, barely redable, bad
*/

const exam_dir = "wbsu-ug";

const exam_years = [
    "2014",
    "2015",
    "2016",
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

        "AMPW-8-2022.pdf",  //-uq

    ],

    "ASPA": [

        "ASPADSE01T-2021.pdf",  //-uq
        "ASPADSE03T-2021.pdf",  //-uq

    ],

    "AUDA": [

        "AUDA-6-2022.pdf",  //-uq

    ],

    "BNGA": [

        "BNGA-1-2014.pdf",  //-hq
        "BNGA-1-2015.pdf",  //-mq
        "BNGA-1-2016.pdf",  //-mq
        "BNGA-1-2017.pdf",  //-mq
        "BNGA-1-2018.pdf",  //-mq
        "BNGA-3-2014.pdf",  //-mq
        "BNGA-3-2015.pdf",  //-mq
        "BNGA-3-2016.pdf",  //-hq
        "BNGA-3-2018.pdf",  //-mq
        "BNGA-5-2014.pdf",  //-mq
        "BNGA-5-2015.pdf",  //-mq
        "BNGA-5-2016.pdf",  //-hq
        "BNGA-5-2017.pdf",  //-mq
        "BNGA-5-2018.pdf",  //-mq
        "BNGA-5-2022.pdf",  //-uq
        "BNGA-6-2022.pdf",  //-uq
        "BNGA-8-2022.pdf",  //-uq


        "BNGACOR01T-2021.pdf",  //-uq
        "BNGACOR02T-2021.pdf",  //-uq
        "BNGACOR02T-2022.pdf",  //-uq
        "BNGACOR03T-2021.pdf",  //-uq
        "BNGACOR03T-2022.pdf",  //-uq
        "BNGACOR04T-2021.pdf",  //-uq
        "BNGACOR04T-2022.pdf",  //-uq
        "BNGACOR05T-2021.pdf",  //-uq
        "BNGACOR06T-2021.pdf",  //-uq
        "BNGACOR07T-2021.pdf",  //-uq
        "BNGACOR08T-2021.pdf",  //-uq
        "BNGACOR08T-2022.pdf",  //-uq
        "BNGACOR09T-2021.pdf",  //-uq
        "BNGACOR09T-2022.pdf",  //-uq
        "BNGACOR10T-2021.pdf",  //-uq
        "BNGACOR10T-2022.pdf",  //-uq
        "BNGACOR11T-2021.pdf",  //-uq
        "BNGACOR11T-2022.pdf",  //-uq
        "BNGACOR12T-2022.pdf",  //-uq
        "BNGACOR13T-2022.pdf",  //-uq
        "BNGACOR14T-2021.pdf",  //-uq
        "BNGACOR14T-2022.pdf",  //-uq

        "BNGADSE01T-2021.pdf",  //-uq
        "BNGADSE02T-2021.pdf",  //-uq
        "BNGADSE02T-2022.pdf",  //-uq
        "BNGADSE03T-2021.pdf",  //-uq
        "BNGADSE04T-2021.pdf",  //-uq
        "BNGADSE04T-2022.pdf",  //-uq
        "BNGADSE05T-2021.pdf",  //-uq
        "BNGADSE05T-2022.pdf",  //-uq
        "BNGADSE06T-2021.pdf",  //-uq
        "BNGADSE06T-2022.pdf",  //-uq

    ],

    "BNGG": [

        "BNGG-1-2014.pdf",  //-hq
        "BNGG-1-2015.pdf",  //-hq
        "BNGG-1-2016.pdf",  //-hq
        "BNGG-1-2017.pdf",  //-mq
        "BNGG-2-2014.pdf",  //-hq
        "BNGG-2-2015.pdf",  //-hq
        "BNGG-2-2016.pdf",  //-hq
        "BNGG-2-2017.pdf",  //-mq
        "BNGG-2-2018.pdf",  //-mq
        "BNGG-4-2014.pdf",  //-hq
        "BNGG-4-2015.pdf",  //-hq
        "BNGG-4-2016.pdf",  //-mq
        "BNGG-4-2017.pdf",  //-mq
        "BNGG-4-2018.pdf",  //-mq
        "BNGG-4-2022.pdf",  //-hq

        "BNGGCOR01T-2021.pdf",  //-uq
        "BNGGCOR01T-2022.pdf",  //-uq
        "BNGGCOR02T-2021.pdf",  //-uq
        "BNGGCOR02T-2022.pdf",  //-uq
        "BNGGCOR03T-2021.pdf",  //-uq
        "BNGGCOR04T-2021.pdf",  //-uq
        "BNGGCOR04T-2022.pdf",  //-uq

        "BNGGDSE01T-2021.pdf",  //-uq
        "BNGGDSE02T-2021.pdf",  //-uq
        "BNGGDSE03T-2021.pdf",  //-uq
        "BNGGDSE03T-2022.pdf",  //-uq
        "BNGGDSE04T-2021.pdf",  //-uq
        "BNGGDSE04T-2022.pdf",  //-uq

        "BNGGGEC01T-2021.pdf",  //-uq
        "BNGGGEC02T-2021.pdf",  //-uq
        "BNGGGEC02T-2022.pdf",  //-uq

        "BNGLCOR01T-2021.pdf",  //-uq
        "BNGLCOR02T-2021.pdf",  //-uq
        "BNGLCOR02T-2022.pdf",  //-uq

    ],

    "BOTA": [

        "BOTACOR05T-2021.pdf",  //-uq

    ],

    "BOTG": [

        "BOTG-4-2022.pdf",  //-hq

    ],

    "CEMA": [

        "CEMA-5-2022.pdf",  //-hq
        "CEMA-6-2022.pdf",  //-hq

        "CEMADSE06T-2022.pdf",  //-uq

    ],

    "CEMG": [

        "CEMGCOR01T-2021.pdf",  //-uq
        "CEMGCOR01T-2022.pdf",  //-uq
        "CEMGCOR02T-2021.pdf",  //-uq
        "CEMGCOR02T-2022.pdf",  //-uq
        "CEMGCOR03T-2021.pdf",  //-uq
        "CEMGCOR04T-2022.pdf",  //-uq

        "CEMGDSE01T-2021.pdf",  //-uq
        "CEMGDSE02T-2021.pdf",  //-uq
        "CEMGDSE03T-2021.pdf",  //-uq
        "CEMGDSE03T-2022.pdf",  //-uq
        "CEMGDSE04T-2021.pdf",  //-uq
        "CEMGDSE04T-2022.pdf",  //-uq

    ],

    "CMAG": [

        "CMAGCOR01T-2021.pdf",  //-uq
        "CMAGCOR02T-2021.pdf",  //-uq
        "CMAGCOR02T-2022.pdf",  //-uq
        "CMAGCOR03T-2021.pdf",  //-uq
        "CMAGCOR04T-2022.pdf",  //-uq

        "CMAGDSE01T-2021.pdf",  //-uq
        "CMAGDSE03T-2022.pdf",  //-uq
        "CMAGDSE04T-2022.pdf",  //-uq

    ],

    "CMSA": [

        "CMSA-1-2017.pdf",  //-uq
        "CMSA-1-2018.pdf",  //-uq
        "CMSA-1-2019.pdf",  //-uq
        "CMSA-1-2021.pdf",  //-mq
        "CMSA-2A-2017.pdf",  //-uq
        "CMSA-2A-2018.pdf",  //-uq
        "CMSA-2A-2019.pdf",  //-uq
        "CMSA-2A-2021.pdf",  //-lq
        "CMSA-3-2017.pdf",  //-uq
        "CMSA-3-2018.pdf",  //-uq
        "CMSA-3-2019.pdf",  //-uq
        "CMSA-3-2020.pdf",  //-uq
        "CMSA-3-2022.pdf",  //-uq
        "CMSA-4-2020.pdf",  //-uq
        "CMSA-4A-2017.pdf",  //-uq
        "CMSA-4A-2018.pdf",  //-uq
        "CMSA-4A-2019.pdf",  //-uq
        "CMSA-4A-2022.pdf",  //-uq
        "CMSA-5-2018.pdf",  //-uq
        "CMSA-5-2019.pdf",  //-uq
        "CMSA-5-2020.pdf",  //-uq
        "CMSA-6-2018.pdf",  //-uq
        "CMSA-6-2019.pdf",  //-uq
        "CMSA-6-2020.pdf",  //-uq

        "CMSACOR01T-2019.pdf",  //-lq
        "CMSACOR01T-2021.pdf",  //-uq
        "CMSACOR01T-2022.pdf",  //-uq
        "CMSACOR02T-2019.pdf",  //-lq
        "CMSACOR02T-2021.pdf",  //-uq
        "CMSACOR02T-2022.pdf",  //-uq
        "CMSACOR03T-2020.pdf",  //-uq
        "CMSACOR03T-2021.pdf",  //-uq
        "CMSACOR03T-2022.pdf",  //-uq
        "CMSACOR04T-2020.pdf",  //-uq
        "CMSACOR04T-2021.pdf",  //-uq
        "CMSACOR04T-2022.pdf",  //-uq
        "CMSACOR05T-2019.pdf",  //-lq
        "CMSACOR05T-2021.pdf",  //-uq
        "CMSACOR05T-2022.pdf",  //-uq
        "CMSACOR06T-2019.pdf",  //-lq
        "CMSACOR06T-2021.pdf",  //-uq
        "CMSACOR06T-2022.pdf",  //-uq
        "CMSACOR07T-2019.pdf",  //-lq
        "CMSACOR07T-2021.pdf",  //-uq
        "CMSACOR07T-2022.pdf",  //-uq
        "CMSACOR07T-supple-2021.pdf",  //-uq
        "CMSACOR08T-2020.pdf",  //-uq
        "CMSACOR08T-2021.pdf",  //-uq
        "CMSACOR08T-2022.pdf",  //-uq
        "CMSACOR09T-2020.pdf",  //-uq
        "CMSACOR09T-2021.pdf",  //-uq
        "CMSACOR09T-2022.pdf",  //-uq
        "CMSACOR10T-2020.pdf",  //-uq
        "CMSACOR10T-2021.pdf",  //-uq
        "CMSACOR10T-2022.pdf",  //-uq
        "CMSACOR11T-2021.pdf",  //-uq
        "CMSACOR11T-2022.pdf",  //-uq
        "CMSACOR12T-2021.pdf",  //-uq
        "CMSACOR12T-2022.pdf",  //-uq
        "CMSACOR13T-2021.pdf",  //-uq
        "CMSACOR13T-2022.pdf",  //-uq
        "CMSACOR14T-2021.pdf",  //-uq
        "CMSACOR14T-2022.pdf",  //-uq

        "CMSADSE01T-2021.pdf",  //-uq
        "CMSADSE01T-2022.pdf",  //-uq
        "CMSADSE02T-2021.pdf",  //-uq
        "CMSADSE02T-2022.pdf",  //-uq
        "CMSADSE03T-2021.pdf",  //-uq
        "CMSADSE03T-2022.pdf",  //-uq
        "CMSADSE04T-2021.pdf",  //-uq
        "CMSADSE04T-2022.pdf",  //-uq
        "CMSADSE05T-2021.pdf",  //-uq
        "CMSADSE05T-2022.pdf",  //-uq

    ],

    "CMSG": [

        "CMSG-1-2017.pdf",  //-uq
        "CMSG-1-2018.pdf",  //-uq
        "CMSG-1-2019.pdf",  //-uq
        "CMSG-1-2020.pdf",  //-uq
        "CMSG-3-2020.pdf",  //-uq
        "CMSG-3A-2017.pdf",  //-uq
        "CMSG-3A-2018.pdf",  //-uq
        "CMSG-3A-2019.pdf",  //-uq
        "CMSG-3A-2022.pdf",  //-uq
        "CMSG-4A-2020.pdf",  //-uq
        "CMSG-4A-2021.pdf",  //-uq
        "CMSG-4A-2022.pdf",  //-uq

        "CMSGCOR01T-2021.pdf",  //-uq
        "CMSGCOR01T-2022.pdf",  //-uq
        "CMSGCOR02T-2020.pdf",  //-uq
        "CMSGCOR02T-2021.pdf",  //-uq
        "CMSGCOR02T-2022.pdf",  //-uq
        "CMSGCOR03T-2021.pdf",  //-uq
        "CMSGCOR03T-2022.pdf",  //-uq
        "CMSGCOR03T-supple-2021.pdf",  //-uq
        "CMSGCOR04T-2020.pdf",  //-uq
        "CMSGCOR04T-2021.pdf",  //-uq
        "CMSGCOR04T-2022.pdf",  //-uq

        "CMSGDSE01T-2021.pdf",  //-uq
        "CMSGDSE01T-2022.pdf",  //-uq
        "CMSGDSE02T-2021.pdf",  //-uq
        "CMSGDSE02T-2022.pdf",  //-uq
        "CMSGDSE03T-2021.pdf",  //-uq
        "CMSGDSE03T-2022.pdf",  //-uq
        "CMSGDSE04T-2021.pdf",  //-uq
        "CMSGDSE04T-2022.pdf",  //-uq

    ],

    "ECOG": [

        "ECOG-1-2014.pdf",  //-hq
        "ECOG-1-2016.pdf",  //-hq
        "ECOG-1-2017.pdf",  //-mq
        "ECOG-2-2014.pdf",  //-hq
        "ECOG-2-2015.pdf",  //-hq
        "ECOG-2-2016.pdf",  //-hq
        "ECOG-2-2017.pdf",  //-mq
        "ECOG-2-2018.pdf",  //-mq
        "ECOG-4-2014.pdf",  //-hq
        "ECOG-4-2017.pdf",  //-mq
        "ECOG-4-2022.pdf",  //-hq

        "ECOGCOR01T-2022.pdf",  //-uq
        "ECOGCOR02T-2021.pdf",  //-uq
        "ECOGCOR02T-2022.pdf",  //-uq
        "ECOGCOR03T-2021.pdf",  //-uq
        "ECOGCOR04T-2021.pdf",  //-uq
        "ECOGCOR04T-2022.pdf",  //-uq

        "ECOGDSE01T-2022.pdf",  //-uq
        "ECOGDSE02T-2022.pdf",  //-uq
        "ECOGDSE03T-2021.pdf",  //-uq
        "ECOGDSE03T-2022.pdf",  //-uq
        "ECOGDSE04T-2021.pdf",  //-uq

        "ECOGGEC01T-2021.pdf",  //-uq
        "ECOGGEC02T-2021.pdf",  //-uq
        "ECOGGEC02T-2022.pdf",  //-uq

    ],

    "EDCA": [

        "EDCA-1-2014.pdf",  //-hq
        "EDCG-1-2014.pdf",  //-hq
        "EDCA-1-2015.pdf",  //-mq
        "EDCA-1-2016.pdf",  //-hq
        "EDCA-1-2017.pdf",  //-mq
        "EDCA-1-2018.pdf",  //-mq
        "EDCG-2-2014.pdf",  //-hq
        "EDCA-3-2015.pdf",  //-mq
        "EDCA-3-2016.pdf",  //-hq
        "EDCA-3-2017.pdf",  //-mq
        "EDCA-3-2018.pdf",  //-mq
        "EDCA-5-2014.pdf",  //-hq
        "EDCA-5-2015.pdf",  //-mq
        "EDCA-5-2016.pdf",  //-hq
        "EDCA-5-2017.pdf",  //-mq
        "EDCA-5-2018.pdf",  //-mq
        "EDCA-5-2022.pdf",  //-uq
        "EDCA-6-2022.pdf",  //-uq
        "EDCA-8-2022.pdf",  //-uq


        "EDCACOR01T-2021.pdf",  //-uq
        "EDCACOR02T-2021.pdf",  //-uq
        "EDCACOR02T-2022.pdf",  //-uq
        "EDCACOR03T-2021.pdf",  //-uq
        "EDCACOR03T-2022.pdf",  //-uq
        "EDCACOR04T-2021.pdf",  //-uq
        "EDCACOR04T-2022.pdf",  //-uq
        "EDCACOR05T-2021.pdf",  //-uq
        "EDCACOR06T-2021.pdf",  //-uq
        "EDCACOR07T-2021.pdf",  //-uq
        "EDCACOR08T-2021.pdf",  //-uq
        "EDCACOR08T-2022.pdf",  //-uq
        "EDCACOR09T-2021.pdf",  //-uq
        "EDCACOR09T-2022.pdf",  //-uq
        "EDCACOR10T-2021.pdf",  //-uq
        "EDCACOR10T-2022.pdf",  //-uq
        "EDCACOR11T-2021.pdf",  //-uq
        "EDCACOR11T-2022.pdf",  //-uq
        "EDCACOR12T-2022.pdf",  //-uq
        "EDCACOR13T-2022.pdf",  //-uq
        "EDCACOR14T-2021.pdf",  //-uq
        "EDCACOR14T-2022.pdf",  //-uq

        "EDCADSE01T-2021.pdf",  //-uq
        "EDCADSE02T-2022.pdf",  //-uq
        "EDCADSE03T-2021.pdf",  //-uq
        "EDCADSE04T-2021.pdf",  //-uq
        "EDCADSE04T-2022.pdf",  //-uq
        "EDCADSE05T-2021.pdf",  //-uq
        "EDCADSE05T-2022.pdf",  //-uq
        "EDCADSE06T-2021.pdf",  //-uq
        "EDCADSE06T-2022.pdf",  //-uq

    ],

    "EDCG": [

        "EDCG-1-2015.pdf", //-hq
        "EDCG-1-2016.pdf",  //-hq
        "EDCG-1-2017.pdf",  //-mq
        "EDCG-2-2015.pdf", //-hq
        "EDCG-2-2016.pdf",  //-hq
        "EDCD-2-2017.pdf",  //-mq
        "EDCG-2-2018.pdf",  //-mq
        "EDCG-4-2016.pdf",  //-hq
        "EDCG-4-2017.pdf",  //-mq
        "EDCG-4-2018.pdf",  //-mq
        "EDCG-4-2022.pdf",  //-hq

        "EDCGCOR01T-2021.pdf",  //-uq
        "EDCGCOR01T-2022.pdf",  //-uq
        "EDCGCOR02T-2021.pdf",  //-uq
        "EDCGCOR02T-2022.pdf",  //-uq
        "EDCGCOR04T-2021.pdf",  //-uq
        "EDCGCOR04T-2022.pdf",  //-uq

        "EDCGDSE02T-2021.pdf",  //-uq
        "EDCGDSE03T-2022.pdf",  //-uq
        "EDCGDSE04T-2022.pdf",  //-uq

        "EDCGGEC01T-2021.pdf",  //-uq
        "EDCGGEC02T-2021.pdf",  //-uq
        "EDCGGEC02T-2022.pdf",  //-uq

    ],

    "ENGA": [

        "ENGA-1-2014.pdf",  //-hq
        "ENGA-1-2015.pdf",  //-mq
        "ENGA-1-2016.pdf",  //-hq
        "ENGA-1-2017.pdf",  //-mq
        "ENGA-1-2018.pdf",  //-mq
        "ENGA-3-2014.pdf",  //-mq
        "ENGA-3-2015.pdf",  //-mq
        "ENGA-3-2016.pdf",  //-hq
        "ENGA-3-2017.pdf",  //-mq
        "ENGA-3-2018.pdf",  //-mq
        "ENGA-5-2014.pdf",  //-mq
        "ENGA-5-2015.pdf",  //-mq
        "ENGA-5-2016.pdf",  //-hq
        "ENGA-5-2017.pdf",  //-mq
        "ENGA-5-2018.pdf",  //-mq
        "ENGA-5-2022.pdf",  //-uq
        "ENGA-6-2022.pdf",  //-uq
        "ENGA-8-2022.pdf",  //-uq

        "ENGACOR01T-2021.pdf",  //-uq
        "ENGACOR02T-2021.pdf",  //-uq
        "ENGACOR02T-2022.pdf",  //-uq
        "ENGACOR03T-2021.pdf",  //-uq
        "ENGACOR03T-2022.pdf",  //-uq
        "ENGACOR04T-2020.pdf",  //-uq
        "ENGACOR04T-2021.pdf",  //-uq
        "ENGACOR04T-2022.pdf",  //-uq
        "ENGACOR05T-2021.pdf",  //-uq
        "ENGACOR05T-2022.pdf",  //-uq
        "ENGACOR06T-2021.pdf",  //-uq
        "ENGACOR06T-2022.pdf",  //-uq
        "ENGACOR07T-2021.pdf",  //-uq
        "ENGACOR07T-2022.pdf",  //-uq
        "ENGACOR08T-2021.pdf",  //-uq
        "ENGACOR08T-2022.pdf",  //-uq
        "ENGACOR09T-2021.pdf",  //-uq
        "ENGACOR09T-2022.pdf",  //-uq
        "ENGACOR10T-2021.pdf",  //-uq
        "ENGACOR10T-2022.pdf",  //-uq
        "ENGACOR11T-2022.pdf",  //-uq
        "ENGACOR12T-2022.pdf",  //-uq
        "ENGACOR13T-2022.pdf",  //-uq
        "ENGACOR14T-2021.pdf",  //-uq
        "ENGACOR14T-2022.pdf",  //-uq

        "ENGADSE01T-2021.pdf",  //-uq
        "ENGADSE01T-2022.pdf",  //-uq
        "ENGADSE02T-2021.pdf",  //-uq
        "ENGADSE02T-2022.pdf",  //-uq
        "ENGADSE04T-2021.pdf",  //-uq
        "ENGADSE04T-2022.pdf",  //-uq
        "ENGADSE05T-2021.pdf",  //-uq
        "ENGADSE05T-2022.pdf",  //-uq

    ],

    "ENGG": [

        "ENGG-1-2014.pdf",  //-mq
        "ENGG-2-2014.pdf",  //-hq
        "ENGG-4-2014.pdf",  //-hq
        "ENGG-1-2015.pdf",  //-hq
        "ENGG-2-2015.pdf",  //-hq
        "ENGG-1-2016.pdf",  //-hq
        "ENGG-2-2016.pdf",  //-hq
        "ENGG-1-2017.pdf",  //-mq
        "ENGG-2-2017.pdf",  //-mq
        "ENGG-2-2018.pdf",  //-mq
        "ENGG-4-2017.pdf",  //-mq
        "ENGG-4-2018.pdf",  //-mq
        "ENGG-4-2022.pdf",  //-hq

        "ENGGCOR01T-2022.pdf",  //-uq
        "ENGGCOR02T-2021.pdf",  //-uq
        "ENGGCOR02T-2022.pdf",  //-uq
        "ENGGCOR03T-2021.pdf",  //-uq
        "ENGGCOR04T-2021.pdf",  //-uq
        "ENGGCOR04T-2022.pdf",  //-uq

        "ENGGDSE01T-2021.pdf",  //-uq
        "ENGGDSE04T-2022.pdf",  //-uq

        "ENGGGEC01T-2021.pdf",  //-uq
        "ENGGGEC02T-2021.pdf",  //-uq
        "ENGGGEC02T-2022.pdf",  //-uq

        "ENGHGEC01T-2021.pdf",  //-uq

        "ENGLCOR01T-2021.pdf",  //-uq
        "ENGLCOR02T-2021.pdf",  //-uq
        "ENGLCOR02T-2022.pdf",  //-uq

        "ENGMCOR01T-2021.pdf",  //-uq
        "ENGMCOR02T-2021.pdf",  //-uq
        "ENGMCOR02T-2022.pdf",  //-uq

    ],

    "EVSG": [

        "EVSGCOR01T-2021.pdf",  //-uq
        "EVSGCOR02T-2021.pdf",  //-uq
        "EVSGCOR02T-2022.pdf",  //-uq
        "EVSGCOR03T-2021.pdf",  //-uq
        "EVSGCOR04T-2021.pdf",  //-uq
        "EVSGCOR04T-2022.pdf",  //-uq

        "EVSGDSE01T-2022.pdf",  //-uq
        "EVSGDSE02T-2022.pdf",  //-uq
        "EVSGDSE03T-2022.pdf",  //-uq

    ],

    "FACA": [

        "FACA-5-2022.pdf",  //-uq

        "FACACOR01T-2021.pdf",  //-uq
        "FACACOR02T-2021.pdf",  //-uq
        "FACACOR02T-2022.pdf",  //-uq
        "FACACOR03T-2021.pdf",  //-uq
        "FACACOR03T-2022.pdf",  //-uq
        "FACACOR04T-2021.pdf",  //-uq
        "FACACOR04T-2022.pdf",  //-uq
        "FACACOR05T-2021.pdf",  //-uq
        "FACACOR06T-2021.pdf",  //-uq
        "FACACOR07T-2021.pdf",  //-uq
        "FACACOR08T-2021.pdf",  //-uq
        "FACACOR08T-2022.pdf",  //-uq
        "FACACOR09T-2021.pdf",  //-uq
        "FACACOR09T-2022.pdf",  //-uq
        "FACACOR10T-2021.pdf",  //-uq
        "FACACOR10T-2022.pdf",  //-uq
        "FACACOR11T-2021.pdf",  //-uq
        "FACACOR11T-2022.pdf",  //-uq
        "FACACOR12T-2022.pdf",  //-uq
        "FACACOR13T-2022.pdf",  //-uq
        "FACACOR14T-2021.pdf",  //-uq
        "FACACOR14T-2022.pdf",  //-uq

        "FACADSE01T-2021.pdf",  //-uq
        "FACADSE02T-2021.pdf",  //-uq
        "FACADSE02T-2022.pdf",  //-uq
        "FACADSE03T-2021.pdf",  //-uq
        "FACADSE04T-2021.pdf",  //-uq
        "FACADSE07T-2021.pdf",  //-uq
        "FACADSE07T-2022.pdf",  //-uq
        "FACADSE08T-2021.pdf",  //-uq
        "FACADSE08T-2022.pdf",  //-uq
        "FACADSE09T-2021.pdf",  //-uq
        "FACADSE09T-2022.pdf",  //-uq
        "FACADSE10T-2021.pdf",  //-uq
        "FACADSE10T-2022.pdf",  //-uq

    ],

    "FACG": [

        "FACG-3-2022.pdf",  //-uq

        "FACGCOR01T-2022.pdf",  //-uq
        "FACGCOR02T-2021.pdf",  //-uq
        "FACGCOR02T-2022.pdf",  //-uq
        "FACGCOR03T-2021.pdf",  //-uq
        "FACGCOR03T-2022.pdf",  //-uq
        "FACGCOR04T-2021.pdf",  //-uq
        "FACGCOR04T-2022.pdf",  //-uq
        "FACGCOR05T-2021.pdf",  //-uq
        "FACGCOR06T-2021.pdf",  //-uq
        "FACGCOR07T-2021.pdf",  //-uq
        "FACGCOR07T-2022.pdf",  //-uq
        "FACGCOR08T-2021.pdf",  //-uq
        "FACGCOR08T-2022.pdf",  //-uq

        "FACGDSE01T-2021.pdf",  //-uq
        "FACGDSE01T-2022.pdf",  //-uq
        "FACGDSE02T-2022.pdf",  //-uq
        "FACGDSE04T-2021.pdf",  //-uq
        "FACGDSE04T-2022.pdf",  //-uq
        "FACGDSE06T-2021.pdf",  //-uq
        "FACGDSE07T-2022.pdf",  //-uq
        "FACGDSE08T-2021.pdf",  //-uq
        "FACGDSE08T-2022.pdf",  //-uq
        "FACGDSE09T-2022.pdf",  //-uq
        "FACGDSE10T-2021.pdf",  //-uq
        "FACGDSE10T-2022.pdf",  //-uq
        "FACGDSE11T-2022.pdf",  //-uq

        "FACGGEC01T-2021.pdf",  //-uq
        "FACGGEC02T-2021.pdf",  //-uq
        "FACGGEC02T-2022.pdf",  //-uq

        "FACHGEC01T-2021.pdf",  //-uq
        "FACHGEC01T-2022.pdf",  //-uq
        "FACHGEC02T-2021.pdf",  //-uq
        "FACHGEC02T-2022.pdf",  //-uq
        "FACHGEC03T-2021.pdf",  //-uq
        "FACHGEC04T-2021.pdf",  //-uq
        "FACHGEC04T-2022.pdf",  //-uq

    ],

    "FMNG": [

        "FMNG-5-2022pdf.pdf",  //-hq

    ],

    "GEOA": [

        "GEOA-5-2022.pdf",  //-uq
        "GEOA-6-2022.pdf",  //-uq

        "GEOACOR01T-2021.pdf",  //-uq
        "GEOACOR02T-2021.pdf",  //-uq
        "GEOACOR02T-2022.pdf",  //-uq
        "GEOACOR03T-2021.pdf",  //-uq
        "GEOACOR03T-2022.pdf",  //-uq
        "GEOACOR04T-2021.pdf",  //-uq
        "GEOACOR04T-2022.pdf",  //-uq
        "GEOACOR05T-2021.pdf",  //-uq
        "GEOACOR06T-2021.pdf",  //-uq
        "GEOACOR07T-2021.pdf",  //-uq
        "GEOACOR08T-2021.pdf",  //-uq
        "GEOACOR08T-2022.pdf",  //-uq
        "GEOACOR09T-2021.pdf",  //-uq
        "GEOACOR09T-2022.pdf",  //-uq
        "GEOACOR10T-2021.pdf",  //-uq
        "GEOACOR10T-2022.pdf",  //-uq
        "GEOACOR11T-2021.pdf",  //-uq
        "GEOACOR11T-2022.pdf",  //-uq
        "GEOACOR12T-2022.pdf",  //-uq
        "GEOACOR13T-2022.pdf",  //-uq
        "GEOACOR14T-2021.pdf",  //-uq
        "GEOACOR14T-2022.pdf",  //-uq

        "GEOADSE01T-2021.pdf",  //-uq
        "GEOADSE02T-2021.pdf",  //-uq
        "GEOADSE02T-2022.pdf",  //-uq
        "GEOADSE03T-2021.pdf",  //-uq
        "GEOADSE04T-2021.pdf",  //-uq
        "GEOADSE04T-2022.pdf",  //-uq
        "GEOADSE05T-2021.pdf",  //-uq
        "GEOADSE05T-2022.pdf",  //-uq
        "GEOADSE06T-2021.pdf",  //-uq
        "GEOADSE06T-2022.pdf",  //-uq

    ],

    "GEOG": [

        "GEOG-1-2014.pdf",  //-hq
        "GEOG-2-2014.pdf",  //-hq
        "GEOG-4-2014.pdf",  //-hq
        "GEOG-1-2015.pdf",  //-hq
        "GEOG-1-2016.pdf",  //-hq
        "GEOG-1-2017.pdf",  //-mq
        "GEOG-2-2015.pdf",  //-hq
        "GEOG-2-2016.pdf",  //-hq
        "GEOG-2-2017.pdf",  //-mq
        "GEOG-2-2018.pdf",  //-mq
        "GEOG-4-2015.pdf",  //-hq
        "GEOG-4-2017.pdf",  //-mq
        "GEOG-4-2018.pdf",  //-mq
        "GEOG-4-2022.pdf",  //-uq

        "GEOGCOR01T-2022.pdf",  //-uq
        "GEOGCOR02T-2021.pdf",  //-uq
        "GEOGCOR02T-2022.pdf",  //-uq
        "GEOGCOR03T-2021.pdf",  //-uq
        "GEOGCOR04T-2021.pdf",  //-uq
        "GEOGCOR04T-2022.pdf",  //-uq

        "GEOGDSE01T-2021.pdf",  //-uq
        "GEOGDSE02T-2021.pdf",  //-uq

    ],

    "HINA": [

        "HINA-5-2022.pdf",  //-hq
        "HINA-6-2022.pdf",  //-hq
        "HINA-8-2022.pdf",  //-hq

        "HINADSE05T-2022.pdf",  //-uq
        "HINADSE06T-2022.pdf",  //-uq

    ],

    "HING": [

        "HING-4-2022.pdf",  //-hq

        "HINGCOR01T-2021.pdf",  //-uq
        "HINGCOR02T-2021.pdf",  //-uq
        "HINGCOR02T-2022.pdf",  //-uq
        "HINGCOR03T-2021.pdf",  //-uq
        "HINGCOR04T-2021.pdf",  //-uq
        "HINGCOR04T-2022.pdf",  //-uq

        "HINGDSE01T-2021.pdf",  //-uq
        "HINGDSE02T-2021.pdf",  //-uq
        "HINGDSE03T-2021.pdf",  //-uq
        "HINGDSE03T-2022.pdf",  //-uq
        "HINGDSE04T-2021.pdf",  //-uq
        "HINGDSE04T-2022.pdf",  //-uq

        "HINGGEC01T-2021.pdf",  //-uq
        "HINGGEC02T-2021.pdf",  //-uq
        "HINGGEC02T-2022.pdf",  //-uq

        "HINLCOR01T-2021.pdf",  //-uq
        "HINLCOR02T-2021.pdf",  //-uq
        "HINLCOR02T-2022.pdf",  //-uq

        "HINSAECO1M-2021.pdf",  //-uq
        "HINSAECO1M-2022.pdf",  //-uq

    ],

    "HISA": [

        "HISA-1-2014.pdf",  //-hq
        "HISA-3-2014.pdf",  //-mq
        "HISA-5-2014.pdf",  //-mq
        "HISA-1-2015.pdf",  //-mq
        "HISA-1-2016.pdf",  //-hq
        "HISA-1-2017.pdf",  //-mq
        "HISA-1-2018.pdf",  //-mq
        "HISA-3-2015.pdf",  //-mq
        "HISA-3-2016.pdf",  //-hq
        "HISA-3-2017.pdf",  //-mq
        "HISA-3-2018.pdf",  //-mq
        "HISA-5-2015.pdf",  //-mq
        "HISA-5-2016.pdf",  //-hq
        "HISA-5-2017.pdf",  //-mq
        "HISA-5-2018.pdf",  //-mq
        "HISA-5-2022.pdf",  //-uq
        "HISA-6-2022.pdf",  //-uq
        "HISA-8-2022.pdf",  //-uq

        "HISACOR01T-2021.pdf",  //-uq
        "HISACOR02T-2021.pdf",  //-uq
        "HISACOR02T-2022.pdf",  //-uq
        "HISACOR03T-2021.pdf",  //-uq
        "HISACOR03T-2022.pdf",  //-uq
        "HISACOR04T-2021.pdf",  //-uq
        "HISACOR04T-2022.pdf",  //-uq
        "HISACOR05T-2021.pdf",  //-uq
        "HISACOR06T-2021.pdf",  //-uq
        "HISACOR07T-2021.pdf",  //-uq
        "HISACOR08T-2021.pdf",  //-uq
        "HISACOR08T-2022.pdf",  //-uq
        "HISACOR09T-2021.pdf",  //-uq
        "HISACOR09T-2022.pdf",  //-uq
        "HISACOR10T-2021.pdf",  //-uq
        "HISACOR10T-2022.pdf",  //-uq
        "HISACOR11T-2021.pdf",  //-uq
        "HISACOR11T-2022.pdf",  //-uq
        "HISACOR12T-2022.pdf",  //-uq
        "HISACOR13T-2022.pdf",  //-uq
        "HISACOR14T-2021.pdf",  //-uq
        "HISACOR14T-2022.pdf",  //-uq

        "HISADSE01T-2021.pdf",  //-uq
        "HISADSE02T-2021.pdf",  //-uq
        "HISADSE02T-2022.pdf",  //-uq
        "HISADSE04T-2021.pdf",  //-uq
        "HISADSE04T-2022.pdf",  //-uq
        "HISADSE05T-2021.pdf",  //-uq
        "HISADSE05T-2022.pdf",  //-uq

    ],

    "HISG": [

        "HISG-1-2014.pdf",  //-hq
        "HISG-2-2014.pdf",  //-hq
        "HISG-4-2014.pdf",  //-hq
        "HISG-1-2015.pdf",  //-hq
        "HISG-2-2015.pdf",  //-hq
        "HISG-4-2015.pdf",  //-hq
        "HISH-1-2016.pdf",  //-hq
        "HISG-1-2017.pdf",  //-mq
        "HISG-2-2016.pdf",  //-hq
        "HISG-2-2017.pdf",  //-mq
        "HISG-2-2018.pdf",  //-mq
        "HISG-4-2016.pdf",  //-hq
        "HISG-4-2017.pdf",  //-mq
        "HISG-4-2018.pdf",  //-mq

        "HISGCOR01T-2021.pdf",  //-uq
        "HISGCOR02T-2021.pdf",  //-uq
        "HISGCOR02T-2022.pdf",  //-uq
        "HISGCOR03T-2021.pdf",  //-uq
        "HISGCOR04T-2021.pdf",  //-uq
        "HISGCOR04T-2022.pdf",  //-uq

        "HISGDSE01T-2021.pdf",  //-uq
        "HISGDSE01T-2022.pdf",  //-uq
        "HISGDSE02T-2021.pdf",  //-uq
        "HISGDSE02T-2022.pdf",  //-uq
        "HISGDSE04T-2021.pdf",  //-uq
        "HISGDSE04T-2022.pdf",  //-uq

        "HISGGEC01T-2021.pdf",  //-uq
        "HISGGEC02T-2021.pdf",  //-uq
        "HISGGEC02T-2022.pdf",  //-uq

    ],

    "HMDG": [

        "HMDG-4A-2022.pdf",  //-hq

    ],

    "JORA": [

        "JORA-5-2022.pdf",  //-hq
        "JORA-6-2022.pdf",  //-hq

    ],

    "MCBG": [

        "MCBG-4-2022.pdf",  //-hq

    ],

    "MTMA": [

        "MTMA-5-2022.pdf",  //-hq
        "MTMA-6-2022.pdf",  //-hq
        "MTMA-8A-2022.pdf",  //-hq

        "MTMACOR07T-2021.pdf",  //-uq
        "MTMACOR11T-2021.pdf",  //-uq
        "MTMACOR13T-2022.pdf",  //-uq

        "MTMADSE04T-2022.pdf",  //-uq
        "MTMADSE05T-2022.pdf",  //-uq
        "MTMADSE06T-2022.pdf",  //-uq

    ],

    "MTMG": [

        "MTMG-1-2014.pdf",  //-hq
        "MTMG-1-2015.pdf",  //-hq
        "MTMG-1-2016.pdf",  //-hq
        "MTMG-1-2017.pdf",  //-mq
        "MTMG-2-2014.pdf",  //-mq
        "MTMG-2-2015.pdf",  //-hq
        "MTMG-2-2016.pdf",  //-mq
        "MTMG-2-2017.pdf",  //-mq
        "MTMG-2-2018.pdf",  //-mq
        "MTMG-4-2014.pdf",  //-mq

        "MTMGCOR01T-2021.pdf",  //-uq
        "MTMGCOR02T-2021.pdf",  //-uq
        "MTMGCOR02T-2022.pdf",  //-uq
        "MTMGCOR03T-2021.pdf",  //-uq
        "MTMGCOR04T-2021.pdf",  //-uq
        "MTMGCOR04T-2022.pdf",  //-uq

        "MTMGDSE01T-2021.pdf",  //-uq
        "MTMGDSE01T-2022.pdf",  //-uq
        "MTMGDSE02T-2021.pdf",  //-uq
        "MTMGDSE02T-2022.pdf",  //-uq
        "MTMGDSE03T-2021.pdf",  //-uq
        "MTMGDSE03T-2022.pdf",  //-uq
        "MTMGDSE04T-2021.pdf",  //-uq
        "MTMGDSE04T-2022.pdf",  //-uq

    ],

    "PEDG": [

        "PEDG-1-2014.pdf",  //-hq
        "PEDG-1-2016.pdf",  //-hq
        "PEDG-1-2017.pdf",  //-mq
        "PEDG-2-2014.pdf",  //-hq
        "PEDG-2-2017.pdf",  //-mq
        "PEDG-4-2014.pdf",  //-hq
        "PEDG-4-2017.pdf",  //-mq
        "PEDG-4A-2016.pdf",  //-hq
        "PEDG-4A-2022pdf.pdf",  //-hq

        "PEDGCOR01T-2021.pdf",  //-uq
        "PEDGCOR01T-2022.pdf",  //-uq
        "PEDGCOR02T-2021.pdf",  //-uq
        "PEDGCOR02T-2022.pdf",  //-uq
        "PEDGCOR03T-2021.pdf",  //-uq
        "PEDGCOR04T-2021.pdf",  //-uq
        "PEDGCOR04T-2022.pdf",  //-uq

        "PEDGDSE01T-2022.pdf",  //-uq
        "PEDGDSE02T-2021.pdf",  //-uq
        "PEDGDSE03T-2022.pdf",  //-uq

        "PEDGGEC01T-2021.pdf",  //-uq
        "PEDGGEC02T-2021.pdf",  //-uq
        "PEDGGEC02T-2022.pdf",  //-uq

    ],

    "PHIA": [

        "PHIA-5-2022.pdf",  //-hq
        "PHIA-6-2022.pdf",  //-hq
        "PHIA-8-2022.pdf",  //-hq

        "PHIACOR05T-2021.pdf",  //-uq
        "PHIADSE06T-2022.pdf",  //-uq

    ],

    "PHIG": [

        "PHIG-1-2014.pdf",  //-hq
        "PHIG-1-2015.pdf",  //-hq
        "PHIG-1-2016.pdf",  //-mq
        "PHIG-1-2017.pdf",  //-mq
        "PHIG-2-2014.pdf",  //-hq
        "PHIG-2-2015.pdf",  //-hq
        "PHIG-2-2016.pdf",  //-lq
        "PHIG-2-2017.pdf",  //-mq
        "PHIG-2-2018.pdf",  //-mq
        "PHIG-4-2014.pdf",  //-hq
        "PHIG-4-2015.pdf",  //-hq
        "PHIG-4-2017.pdf",  //-mq
        "PHIG-4-2018.pdf",  //-mq

        "PHIGCOR02T-2021.pdf",  //-uq
        "PHIGCOR02T-2022.pdf",  //-uq
        "PHIGCOR03T-2021.pdf",  //-uq
        "PHIGCOR04T-2021.pdf",  //-uq
        "PHIGCOR04T-2022.pdf",  //-uq

        "PHIGDSE01T-2021.pdf",  //-uq
        "PHIGDSE02T-2021.pdf",  //-uq
        "PHIGDSE03T-2021.pdf",  //-uq
        "PHIGDSE03T-2022.pdf",  //-uq
        "PHIGDSE04T-2021.pdf",  //-uq
        "PHIGDSE04T-2022.pdf",  //-uq

        "PHIGGEC01T-2021.pdf",  //-uq
        "PHIGGEC02T-2021.pdf",  //-uq
        "PHIGGEC02T-2022.pdf",  //-uq

    ],

    "PHSA": [

        "PHSA-5-2022.pdf",  //-hq
        "PHSA-6-2022.pdf",  //-hq

        "PHSACOR11T-2023.pdf",  //-lq
        "PHSACOR12T-2023.pdf",  //-lq

        "PHSADSE02T-2023.pdf",  //-lq
        "PHSADSE03T-2023.pdf",  //-lq
        "PHSADSE05T-2022.pdf",  //-uq
        "PHSADSE06T-2022.pdf",  //-uq

    ],

    "PHSG": [

        "PHSG-4A-2022pdf.pdf",  //-hq

        "PHSGCOR01T-2021.pdf",  //-uq
        "PHSGCOR01T-2022.pdf",  //-uq
        "PHSGCOR02T-2021.pdf",  //-uq
        "PHSGCOR02T-2022.pdf",  //-uq
        "PHSGCOR03T-2021.pdf",  //-uq
        "PHSGCOR04T-2021.pdf",  //-uq
        "PHSGCOR04T-2022.pdf",  //-uq

        "PHSGDSE01T-2021.pdf",  //-uq
        "PHSGDSE02T-2021.pdf",  //-uq
        "PHSGDSE03T-2022.pdf",  //-uq
        "PHSGDSE04T-2022.pdf",  //-uq

    ],

    "PHYG": [

        "PHYG-4A-2022.pdf",  //-hq

    ],

    "PLSA": [

        "PLSA-1-2014.pdf",  //-mq
        "PLSA-3-2014.pdf",  //-mq
        "PLSA-1-2015.pdf",  //-mq
        "PLSA-1-2016.pdf",  //-hq
        "PLSA-1-2017.pdf",  //-mq
        "PLSA-1-2018.pdf",  //-mq
        "PLSA-3-2015.pdf",  //-mq
        "PLSA-3-2017.pdf",  //-mq
        "PLSA-3-2018.pdf",  //-mq
        "PLSA-5-2015.pdf",  //-mq
        "PLSA-5-2018.pdf",  //-mq
        "PLSA-5-2022.pdf",  //-uq
        "PLSA-6-2022.pdf",  //-uq
        "PLSA-8-2022.pdf",  //-uq

        "PLSACOR01T-2021.pdf",  //-uq
        "PLSACOR02T-2021.pdf",  //-uq
        "PLSACOR02T-2022.pdf",  //-uq
        "PLSACOR03T-2021.pdf",  //-uq
        "PLSACOR03T-2022.pdf",  //-uq
        "PLSACOR04T-2021.pdf",  //-uq
        "PLSACOR04T-2022.pdf",  //-uq
        "PLSACOR05T-2021.pdf",  //-uq
        "PLSACOR07T-2021.pdf",  //-uq
        "PLSACOR08T-2021.pdf",  //-uq
        "PLSACOR08T-2022.pdf",  //-uq
        "PLSACOR09T-2021.pdf",  //-uq
        "PLSACOR09T-2022.pdf",  //-uq
        "PLSACOR10T-2021.pdf",  //-uq
        "PLSACOR10T-2022.pdf",  //-uq
        "PLSACOR11T-2022.pdf",  //-uq
        "PLSACOR12T-2022.pdf",  //-uq
        "PLSACOR13T-2022.pdf",  //-uq
        "PLSACOR14T-2021.pdf",  //-uq
        "PLSACOR14T-2022.pdf",  //-uq

        "PLSADSE01T-2021.pdf",  //-uq
        "PLSADSE02T-2021.pdf",  //-uq
        "PLSADSE02T-2022.pdf",  //-uq
        "PLSADSE03T-2021.pdf",  //-uq
        "PLSADSE04T-2021.pdf",  //-uq
        "PLSADSE04T-2022.pdf",  //-uq
        "PLSADSE05T-2021.pdf",  //-uq
        "PLSADSE05T-2022.pdf",  //-uq
        "PLSADSE06T-2021.pdf",  //-uq
        "PLSADSE06T-2022.pdf",  //-uq

    ],

    "PLSG": [

        "PLSG-1-2014.pdf",  //-hq
        "PLSG-1-2015.pdf",  //-mq
        "PLSG-1-2016.pdf",  //-mq
        "PLSG-2-2014.pdf",  //-hq
        "PLSG-2-2015.pdf",  //-hq
        "PLSG-2-2016.pdf",  //-hq
        "PLSG-2-2017.pdf",  //-mq
        "PLSG-2-2018.pdf",  //-mq
        "PLSG-4-2014.pdf",  //-hq
        "PLSG-4-2015.pdf",  //-hq
        "PLSG-4-2016.pdf",  //-hq
        "PLSG-4-2017.pdf",  //-mq
        "PLSG-4-2018.pdf",  //-mq
        "PLSG-4-2022.pdf",  //-uq

        "PLSGCOR01T-2021.pdf",  //-uq
        "PLSGCOR01T-2022.pdf",  //-uq
        "PLSGCOR02T-2021.pdf",  //-uq
        "PLSGCOR02T-2022.pdf",  //-uq
        "PLSGCOR03T-2021.pdf",  //-uq
        "PLSGCOR04T-2021.pdf",  //-uq
        "PLSGCOR04T-2022.pdf",  //-uq

        "PLSGDSE01T-2021.pdf",  //-uq
        "PLSGDSE02T-2021.pdf",  //-uq
        "PLSGDSE03T-2021.pdf",  //-uq
        "PLSGDSE03T-2022.pdf",  //-uq
        "PLSGDSE04T-2021.pdf",  //-uq
        "PLSGDSE04T-2022.pdf",  //-uq

        "PLSGGEC01T-2021.pdf",  //-uq
        "PLSGGEC02T-2021.pdf",  //-uq
        "PLSGGEC02T-2022.pdf",  //-uq

    ],

    "SANA": [

        "SANA-5-2022.pdf",  //-hq
        "SANA-6-2022.pdf",  //-hq
        "SANA-8-2022.pdf",  //-hq
        "SANADSE05T-2022.pdf",  //-uq
        "SANADSE06T-2022.pdf",  //-uq

    ],

    "SANG": [

        "SANG-1-2014.pdf",  //-hq
        "SANG-1-2016.pdf",  //-hq
        "SANG-1-2017.pdf",  //-mq
        "SANG-2-2014.pdf",  //-hq
        "SANG-2-2016.pdf",  //-hq
        "SANG-2-2017.pdf",  //-mq
        "SANG-2-2018.pdf",  //-mq
        "SANG-4-2014.pdf",  //-hq
        "SANG-4-2016.pdf",  //-hq
        "SANG-4-2017.pdf",  //-mq
        "SANG-4-2018.pdf",  //-mq
        "SANG-4-2022pdf.pdf",  //-hq

        "SANGCOR01T-2021.pdf",  //-uq
        "SANGCOR02T-2021.pdf",  //-uq
        "SANGCOR02T-2022.pdf",  //-uq
        "SANGCOR03T-2021.pdf",  //-uq
        "SANGCOR04T-2022.pdf",  //-uq

        "SANGDSE01T-2021.pdf",  //-uq
        "SANGDSE02T-2021.pdf",  //-uq
        "SANGDSE03T-2021.pdf",  //-uq
        "SANGDSE03T-2022.pdf",  //-uq
        "SANGDSE04T-2021.pdf",  //-uq
        "SANGDSE04T-2022.pdf",  //-uq

        "SANGGEC01T-2021.pdf",  //-uq
        "SANGGEC02T-2021.pdf",  //-uq
        "SANGGEC02T-2022.pdf",  //-uq

        "SANLCOR01T-2021.pdf",  //-uq
        "SANLCOR02T-2021.pdf",  //-uq
        "SANLCOR02T-2022.pdf",  //-uq

        "SANSAEC01M-2021.pdf",  //-uq
        "SANSAEC01M-2022.pdf",  //-uq

    ],

    "SOCA": [

        "SOCA-5-2022.pdf",  //-hq
        "SOCA-6-2022.pdf",  //-hq

    ],

    "URDA": [

        "URDA-5-2022.pdf",  //-hq

    ],

    "URDG": [

        "URDG-4-2022.pdf",  //-hq

    ],

    "ZOOA": [

        "ZOOA-8-2022.pdf",  //-hq

    ],

    "ZOOG": [

        "ZOOG-4A-2022pdf.pdf",  //-hq

    ],

};

const get_exam_papers_count = () => {
    let count = 0;
    Object.values(exam_papers).forEach(arr => count += arr.length);
    return count;
}

const add_search_options = (search_option_subject_display, search_option_year_display) => {
    let option;
    const exam_subjects = Object.keys(exam_papers);
    exam_subjects.forEach(subject => {
        option = document.createElement("option");
        option.text = subject;
        option.value = subject;
        search_option_subject_display.appendChild(option);
    });
    exam_years.reverse().forEach(year => {
        option = document.createElement("option");
        option.text = year;
        option.value = year;
        search_option_year_display.appendChild(option);
    });
};

const search_exam_papers = (subject, year) => {
    let results = [];
    exam_papers[subject].forEach(paper => {
        if (year == "ANY" || paper.slice(-8, -4) == year)
            results.push(paper);
    });
    return results;
};

const output_search_results = (search_results_display, subject, year) => {
    const results = search_exam_papers(subject, year);
    search_results_display.innerHTML =
        `<p id="search-results-info">( ${results.length} results found for ${subject} ${year == "ANY" ? "" : year} )</p>
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

    const search_option_subject = document.getElementById("search-option-subject");
    const search_option_year = document.getElementById("search-option-year");
    const search_btn = document.getElementById("search-btn");
    const search_results = document.getElementById("search-results");

    add_search_options(search_option_subject, search_option_year);

    search_btn.addEventListener("click", () => {
        const subject = search_option_subject.value;
        const year = search_option_year.value;
        output_search_results(search_results, subject, year);
    });

});
