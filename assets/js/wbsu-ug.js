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

    "ANTA": [

        "ANTACOR01T-2022.pdf",  //-uq
        "ANTACOR02T-2022.pdf",  //-uq
        "ANTACOR03T-2021.pdf",  //-uq
        "ANTACOR03T-2022.pdf",  //-uq
        "ANTACOR04T-2021.pdf",  //-uq
        "ANTACOR04T-2022.pdf",  //-uq
        "ANTACOR05T-2022.pdf",  //-uq
        "ANTACOR06T-2022.pdf",  //-uq
        "ANTACOR07T-2022.pdf",  //-uq
        "ANTACOR08T-2022.pdf",  //-uq
        "ANTACOR09T-2022.pdf",  //-uq
        "ANTACOR10T-2021.pdf",  //-uq
        "ANTACOR10T-2022.pdf",  //-uq
        "ANTACOR11T-2022.pdf",  //-uq
        "ANTACOR12T-2022.pdf",  //-uq
        "ANTACOR13T-2021.pdf",  //-uq
        "ANTACOR13T-2022.pdf",  //-uq
        "ANTACOR14T-2021.pdf",  //-uq
        "ANTACOR14T-2022.pdf",  //-uq

        "ANTADSE01T-2022.pdf",  //-uq
        "ANTADSE02T-2022.pdf",  //-uq
        "ANTADSE03T-2022.pdf",  //-uq
        "ANTADSE04T-2021.pdf",  //-uq
        "ANTADSE04T-2022.pdf",  //-uq
        "ANTADSE05T-2021.pdf",  //-uq
        "ANTADSE05T-2022.pdf",  //-uq

    ],

    "ANTG": [

        "ANTG-1-supple-2021.pdf",  //-uq
        "ANTG-4A-supple-2021.pdf",  //-uq

        "ANTGCOR01T-new-2022.pdf",  //-uq
        "ANTGCOR01T-old-2022.pdf",  //-uq
        "ANTGCOR02T-2021.pdf",  //-uq
        "ANTGCOR02T-2022.pdf",  //-uq
        "ANTGCOR03T-2022.pdf",  //-uq
        "ANTGCOR04T-2021.pdf",  //-uq
        "ANTGCOR04T-2022.pdf",  //-uq

        "ANTGDSE01T-2022.pdf",  //-uq
        "ANTGDSE02T-2022.pdf",  //-uq
        "ANTGDSE03T-2021.pdf",  //-uq
        "ANTGDSE03T-2022.pdf",  //-uq
        "ANTGDSE04T-2021.pdf",  //-uq
        "ANTGDSE04T-2022.pdf",  //-uq

    ],

    "ARBA": [

        "ARBACOR01T-2022.pdf",  //-uq
        "ARBACOR02T-2022.pdf",  //-uq
        "ARBACOR03T-2021.pdf",  //-uq
        "ARBACOR03T-2022.pdf",  //-uq
        "ARBACOR04T-2021.pdf",  //-uq
        "ARBACOR04T-2022.pdf",  //-uq
        "ARBACOR05T-2022.pdf",  //-uq
        "ARBACOR06T-2022.pdf",  //-uq
        "ARBACOR07T-2022.pdf",  //-uq
        "ARBACOR08T-2022.pdf",  //-uq
        "ARBACOR09T-2022.pdf",  //-uq
        "ARBACOR10T-2021.pdf",  //-uq
        "ARBACOR10T-2022.pdf",  //-uq
        "ARBACOR11T-2022.pdf",  //-uq
        "ARBACOR12T-2022.pdf",  //-uq
        "ARBACOR13T-2021.pdf",  //-uq
        "ARBACOR13T-2022.pdf",  //-uq
        "ARBACOR14T-2021.pdf",  //-uq
        "ARBACOR14T-2022.pdf",  //-uq

        "ARBADSE01T-2022.pdf",  //-uq
        "ARBADSE02T-2022.pdf",  //-uq
        "ARBADSE03T-2022.pdf",  //-uq
        "ARBADSE04T-2021.pdf",  //-uq
        "ARBADSE04T-2022.pdf",  //-uq

    ],

    "ARBG": [

        "ARBG-4-supple-2021ٰ.pdf",  //-uq

        "ARBGCOR02T-2021.pdf",  //-uq
        "ARBGCOR02T-2022.pdf",  //-uq
        "ARBGCOR03T-2022.pdf",  //-uq
        "ARBGCOR04T-2022.pdf",  //-uq
        "ARBGCR04T-2021.pdf",  //-uq

        "ARBGDSE01T-2022.pdf",  //-uq
        "ARBGDSE02T-2021.pdf",  //-uq
        "ARBGDSE02T-2022.pdf",  //-uq

        "ARBGGEC01T-2022.pdf",  //-uq
        "ARBGGEC02T-2021.pdf",  //-uq
        "ARBGGEC02T-2022.pdf",  //-uq

    ],

    "ARDA": [

        "ARDACOR01T-2022.pdf",  //-uq
        "ARDACOR02T-2022.pdf",  //-uq
        "ARDACOR03T-2021.pdf",  //-uq
        "ARDACOR03T-2022.pdf",  //-uq
        "ARDACOR04T-2021.pdf",  //-uq
        "ARDACOR04T-2022.pdf",  //-uq
        "ARDACOR05T-2022.pdf",  //-uq
        "ARDACOR06T-2022.pdf",  //-uq
        "ARDACOR07T-2022.pdf",  //-uq
        "ARDACOR08T-2022.pdf",  //-uq
        "ARDACOR09T-2022.pdf",  //-uq
        "ARDACOR10T-2021.pdf",  //-uq
        "ARDACOR10T-2022.pdf",  //-uq
        "ARDACOR11T-2022.pdf",  //-uq
        "ARDACOR12T-2022.pdf",  //-uq
        "ARDACOR13T-2021.pdf",  //-uq
        "ARDACOR13T-2022.pdf",  //-uq
        "ARDACOR14T-2021.pdf",  //-uq
        "ARDACOR14T-2022.pdf",  //-uq

        "ARDADSE01T-2022.pdf",  //-uq
        "ARDADSE02T-2022.pdf",  //-uq
        "ARDADSE06T-2021.pdf",  //-uq
        "ARDADSE06T-2022.pdf",  //-uq

    ],

    "ASPA": [

        "ASPACOR01T-2022.pdf",  //-uq
        "ASPACOR02T-2022.pdf",  //-uq
        "ASPACOR03T-2021.pdf",  //-uq
        "ASPACOR03T-2022.pdf",  //-uq
        "ASPACOR04T-2021.pdf",  //-uq
        "ASPACOR04T-2022.pdf",  //-uq
        "ASPACOR05T-2022.pdf",  //-uq
        "ASPACOR06T-2022.pdf",  //-uq
        "ASPACOR07T-2022.pdf",  //-uq
        "ASPACOR08T-2022.pdf",  //-uq
        "ASPACOR09T-2022.pdf",  //-uq
        "ASPACOR10T-2022.pdf",  //-uq
        "ASPACOR13T-2021.pdf",  //-uq
        "ASPACOR14T-2021.pdf",  //-uq

        "ASPADSE01T-2021.pdf",  //-uq
        "ASPADSE03T-2021.pdf",  //-uq
        "ASPADSE05T-2021.pdf",  //-uq
        "ASPADSE06T-2021.pdf",  //-uq

    ],

    "AUDA": [

        "AUDA-6-2022.pdf",  //-uq

    ],

    "AUDG": [

        "AUDG-4-supple-2021.pdf",  //-uq

    ],

    "BATA": [

        "BATACOR01T-2022.pdf",  //-uq
        "BATACOR02T-2022.pdf",  //-uq
        "BATACOR03T-2021.pdf",  //-uq
        "BATACOR03T-2022.pdf",  //-uq
        "BATACOR04T-2021.pdf",  //-uq
        "BATACOR04T-2022.pdf",  //-uq
        "BATACOR05T-2022.pdf",  //-uq
        "BATACOR06T-2022.pdf",  //-uq
        "BATACOR07T-2022.pdf",  //-uq
        "BATACOR08T-2022.pdf",  //-uq
        "BATACOR10T-2021.pdf",  //-uq
        "BATACOR10T-2022.pdf",  //-uq
        "BATACOR11T-2022.pdf",  //-uq
        "BATACOR12T-2022.pdf",  //-uq
        "BATACOR13T-2021.pdf",  //-uq
        "BATACOR13T-2022.pdf",  //-uq
        "BATACOR14T-2021.pdf",  //-uq
        "BATACOR14T-2022.pdf",  //-uq

        "BATADSE01T-2022.pdf",  //-uq
        "BATADSE03T-2022.pdf",  //-uq
        "BATADSE04T-2021.pdf",  //-uq
        "BATADSE04T-2022.pdf",  //-uq
        "BATADSE06T-2021.pdf",  //-uq
        "BATADSE06T-2022.pdf",  //-uq

    ],

    "BBAA": [

        "BBAACOR01T-2022.pdf",  //-uq
        "BBAACOR02T-2022.pdf",  //-uq
        "BBAACOR03T-2021.pdf",  //-uq
        "BBAACOR03T-2022.pdf",  //-uq
        "BBAACOR04T-2021.pdf",  //-uq
        "BBAACOR04T-2022.pdf",  //-uq
        "BBAACOR05T-2022.pdf",  //-uq
        "BBAACOR06T-2022.pdf",  //-uq
        "BBAACOR07T-2022.pdf",  //-uq
        "BBAACOR08T-2022.pdf",  //-uq
        "BBAACOR09T-2022.pdf",  //-uq
        "BBAACOR10T-2021.pdf",  //-uq
        "BBAACOR10T-2022.pdf",  //-uq
        "BBAACOR11T-2022.pdf",  //-uq
        "BBAACOR12T-2022.pdf",  //-uq
        "BBAACOR13T-2021.pdf",  //-uq
        "BBAACOR13T-2022.pdf",  //-uq
        "BBAACOR14T-2021.pdf",  //-uq
        "BBAACOR14T-2022.pdf",  //-uq

        "BBAADSE01T-2022.pdf",  //-uq
        "BBAADSE02T-2022.pdf",  //-uq
        "BBAADSE03T-2022.pdf",  //-uq
        "BBAADSE04T-2022.pdf",  //-uq
        "BBAADSE05T-2022.pdf",  //-uq
        "BBAADSE06T-2022.pdf",  //-uq
        "BBAADSE07T-2021.pdf",  //-uq
        "BBAADSE07T-2022.pdf",  //-uq
        "BBAADSE08T-2021.pdf",  //-uq
        "BBAADSE08T-2022.pdf",  //-uq
        "BBAADSE09T-2021.pdf",  //-uq
        "BBAADSE09T-2022.pdf",  //-uq
        "BBAADSE10T-2022.pdf",  //-uq
        "BBAADSE11T-2021.pdf",  //-uq
        "BBAADSE11T-2022.pdf",  //-uq
        "BBAADSE12T-2021.pdf",  //-uq
        "BBAADSE12T-2022.pdf",  //-uq

    ],

    "BBAG": [

        "BBAHGEC01T-2022.pdf",  //-uq
        "BBAHGEC02T-2021.pdf",  //-uq
        "BBAHGEC02T-2022.pdf",  //-uq
        "BBAHGEC03T-2022.pdf",  //-uq
        "BBAHGEC04T-2021.pdf",  //-uq
        "BBAHGEC04T-2022.pdf",  //-uq
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
        "BNGACOR01T-2022.pdf",  //-uq
        "BNGACOR01T-supple-2021.pdf",  //-uq
        "BNGACOR02T-2021.pdf",  //-uq
        "BNGACOR02T-2022.pdf",  //-uq
        "BNGACOR02T-supple-2021.pdf",  //-uq
        "BNGACOR03T-2021.pdf",  //-uq
        "BNGACOR03T-2022.pdf",  //-uq
        "BNGACOR03T-supple-2021.pdf",  //-uq
        "BNGACOR04T-2021.pdf",  //-uq
        "BNGACOR04T-2022.pdf",  //-uq
        "BNGACOR04T-supple-2021.pdf",  //-uq
        "BNGACOR05T-2021.pdf",  //-uq
        "BNGACOR05T-2022.pdf",  //-uq
        "BNGACOR05T-supple-2021.pdf",  //-uq
        "BNGACOR06T-2021.pdf",  //-uq
        "BNGACOR06T-2022.pdf",  //-uq
        "BNGACOR06T-supple-2021.pdf",  //-uq
        "BNGACOR07T-2021.pdf",  //-uq
        "BNGACOR07T-2022.pdf",  //-uq
        "BNGACOR07T-supple-2021.pdf",  //-uq
        "BNGACOR08T-2021.pdf",  //-uq
        "BNGACOR08T-2022.pdf",  //-uq
        "BNGACOR08T-supple-2021.pdf",  //-uq
        "BNGACOR09T-2021.pdf",  //-uq
        "BNGACOR09T-2022.pdf",  //-uq
        "BNGACOR10T-2021.pdf",  //-uq
        "BNGACOR10T-2022.pdf",  //-uq
        "BNGACOR11T-2021.pdf",  //-uq
        "BNGACOR11T-2022.pdf",  //-uq
        "BNGACOR11T-supple-2021.pdf",  //-uq
        "BNGACOR12T-2022.pdf",  //-uq
        "BNGACOR12T-supple-2021.pdf",  //-uq
        "BNGACOR13T-2021.pdf",  //-uq
        "BNGACOR13T-2022.pdf",  //-uq
        "BNGACOR14T-2021.pdf",  //-uq
        "BNGACOR14T-2022.pdf",  //-uq

        "BNGADSE01T-2021.pdf",  //-uq
        "BNGADSE01T-2022.pdf",  //-uq
        "BNGADSE02T-2021.pdf",  //-uq
        "BNGADSE02T-2022.pdf",  //-uq
        "BNGADSE03T-2021.pdf",  //-uq
        "BNGADSE03T-2022.pdf",  //-uq
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
        "BNGGCOR01T-supple-2021.pdf",  //-uq
        "BNGGCOR02T-2021.pdf",  //-uq
        "BNGGCOR02T-2022.pdf",  //-uq
        "BNGGCOR02T-supple-2021.pdf",  //-uq
        "BNGGCOR03T-2021.pdf",  //-uq
        "BNGGCOR03T-2022.pdf",  //-uq
        "BNGGCOR03T-supple-2021.pdf",  //-uq
        "BNGGCOR04T-2021.pdf",  //-uq
        "BNGGCOR04T-2022.pdf",  //-uq
        "BNGGCOR04T-supple-2021.pdf",  //-uq

        "BNGGDSE01T-2021.pdf",  //-uq
        "BNGGDSE01T-2022.pdf",  //-uq
        "BNGGDSE01T-supple-2021.pdf",  //-uq
        "BNGGDSE02T-2021.pdf",  //-uq
        "BNGGDSE02T-2022.pdf",  //-uq
        "BNGGDSE02T-supple-2021.pdf",  //-uq
        "BNGGDSE03T-2021.pdf",  //-uq
        "BNGGDSE03T-2022.pdf",  //-uq
        "BNGGDSE04T-2021.pdf",  //-uq
        "BNGGDSE04T-2022.pdf",  //-uq

        "BNGGGEC01T-2021.pdf",  //-uq
        "BNGGGEC01T-2022.pdf",  //-uq
        "BNGGGEC01T-supple-2021.pdf",  //-uq
        "BNGGGEC02T-2021.pdf",  //-uq
        "BNGGGEC02T-2022.pdf",  //-uq

        "BNGLCOR01T-2021.pdf",  //-uq
        "BNGLCOR01T-2022.pdf",  //-uq
        "BNGLCOR01T-supple-2021.pdf",  //-uq
        "BNGLCOR02T-2021.pdf",  //-uq
        "BNGLCOR02T-2022.pdf",  //-uq
        "BNGLCOR02T-supple-2021.pdf",  //-uq

    ],

    "BOTA": [

        "BOTACOR01T-2022.pdf",  //-uq
        "BOTACOR02T-2022.pdf",  //-uq
        "BOTACOR03T-2021.pdf",  //-uq
        "BOTACOR03T-2022.pdf",  //-uq
        "BOTACOR04T-2021.pdf",  //-uq
        "BOTACOR04T-2022.pdf",  //-uq
        "BOTACOR05T-2021.pdf",  //-uq
        "BOTACOR05T-2022.pdf",  //-uq
        "BOTACOR06T-2022.pdf",  //-uq
        "BOTACOR07T-2022.pdf",  //-uq
        "BOTACOR07T-supple-2021.pdf",  //-uq
        "BOTACOR08T-2022.pdf",  //-uq
        "BOTACOR09T-2022.pdf",  //-uq
        "BOTACOR10T-2021.pdf",  //-uq
        "BOTACOR10T-2022.pdf",  //-uq
        "BOTACOR11T-2022.pdf",  //-uq
        "BOTACOR12T-2022.pdf",  //-uq
        "BOTACOR13T-2021.pdf",  //-uq
        "BOTACOR13T-2022.pdf",  //-uq
        "BOTACOR14T-2021.pdf",  //-uq
        "BOTACOR14T-2022.pdf",  //-uq

        "BOTADSE01T-2022.pdf",  //-uq
        "BOTADSE02T-2022.pdf",  //-uq
        "BOTADSE03T-2022.pdf",  //-uq
        "BOTADSE04T-2021.pdf",  //-uq
        "BOTADSE04T-2022.pdf",  //-uq
        "BOTADSE05T-2021.pdf",  //-uq
        "BOTADSE05T-2022.pdf",  //-uq
        "BOTADSE06T-2021.pdf",  //-uq
        "BOTADSE06T-2022.pdf",  //-uq

    ],

    "BOTG": [

        "BOTG-1-supple-2021.pdf",  //-uq
        "BOTG-4-2022.pdf",  //-uq

        "BOTGCOR01T-2022.pdf",  //-uq
        "BOTGCOR02T-2021.pdf",  //-uq
        "BOTGCOR03T-2022.pdf",  //-uq

        "BOTGDSE01T-2022.pdf",  //-uq
        "BOTGDSE03T-2021.pdf",  //-uq
        "BOTGDSE03T-2022.pdf",  //-uq
        "BOTGDSE04T-2021.pdf",  //-uq
        "BOTGDSE04T-2022.pdf",  //-uq

    ],

    "BTHA": [

        "BTHACOR01T-2022.pdf",  //-uq
        "BTHACOR02T-2022.pdf",  //-uq
        "BTHACOR03T-2021.pdf",  //-uq
        "BTHACOR03T-2022.pdf",  //-uq
        "BTHACOR04T-2021.pdf",  //-uq
        "BTHACOR04T-2022.pdf",  //-uq
        "BTHACOR05T-2022.pdf",  //-uq
        "BTHACOR06T-2022.pdf",  //-uq
        "BTHACOR07T-2022.pdf",  //-uq
        "BTHACOR08T-2022.pdf",  //-uq
        "BTHACOR09T-2022.pdf",  //-uq
        "BTHACOR10T-2021.pdf",  //-uq
        "BTHACOR10T-2022.pdf",  //-uq
        "BTHACOR11T-2022.pdf",  //-uq
        "BTHACOR12T-2022.pdf",  //-uq
        "BTHACOR13T-2022.pdf",  //-uq
        "BTHACOR14T-2022.pdf",  //-uq

        "BTHADSE02T-2022.pdf",  //-uq
        "BTHADSE03T-2022.pdf",  //-uq
        "BTHADSE04T-2022.pdf",  //-uq

    ],

    "CEMA": [

        "CEMA-5-2022.pdf",  //-hq
        "CEMA-6-2022.pdf",  //-hq

        "CEMACOR01T-2022.pdf",  //-uq
        "CEMACOR02T-2022.pdf",  //-uq
        "CEMACOR03T-2021.pdf",  //-uq
        "CEMACOR03T-2022.pdf",  //-uq
        "CEMACOR04T-2021.pdf",  //-uq
        "CEMACOR04T-2022.pdf",  //-uq
        "CEMACOR05T-2022.pdf",  //-uq
        "CEMACOR06T-2022.pdf",  //-uq
        "CEMACOR07T-2022.pdf",  //-uq
        "CEMACOR07T-supple-2021.pdf",  //-uq
        "CEMACOR08T-2022.pdf",  //-uq
        "CEMACOR09T-2022.pdf",  //-uq
        "CEMACOR10T-2021.pdf",  //-uq
        "CEMACOR10T-2022.pdf",  //-uq
        "CEMACOR10T-supple-2021.pdf",  //-uq
        "CEMACOR11T-2022.pdf",  //-uq
        "CEMACOR12T-2022.pdf",  //-uq
        "CEMACOR12T-supple-2021.pdf",  //-uq
        "CEMACOR13T-2021.pdf",  //-uq
        "CEMACOR13T-2022.pdf",  //-uq
        "CEMACOR14T-2021.pdf",  //-uq
        "CEMACOR14T-2022.pdf",  //-uq

        "CEMADSE01T-2022.pdf",  //-uq
        "CEMADSE02T-2022.pdf",  //-uq
        "CEMADSE04T-2021.pdf",  //-uq
        "CEMADSE04T-2022.pdf",  //-uq
        "CEMADSE05T-2021.pdf",  //-uq
        "CEMADSE05T-2022.pdf",  //-uq
        "CEMADSE06T-2021.pdf",  //-uq
        "CEMADSE06T-2022.pdf",  //-uq

    ],

    "CEMG": [

        "CEMGCOR01T-2021.pdf",  //-uq
        "CEMGCOR01T-2022.pdf",  //-uq
        "CEMGCOR02T-2021.pdf",  //-uq
        "CEMGCOR02T-2022.pdf",  //-uq
        "CEMGCOR03T-2021.pdf",  //-uq
        "CEMGCOR03T-2022.pdf",  //-uq
        "CEMGCOR04T-2021.pdf",  //-uq
        "CEMGCOR04T-2022.pdf",  //-uq

        "CEMGDSE01T-2021.pdf",  //-uq
        "CEMGDSE01T-2022.pdf",  //-uq
        "CEMGDSE02T-2021.pdf",  //-uq
        "CEMGDSE02T-2022.pdf",  //-uq
        "CEMGDSE03T-2021.pdf",  //-uq
        "CEMGDSE03T-2022.pdf",  //-uq
        "CEMGDSE04T-2021.pdf",  //-uq
        "CEMGDSE04T-2022.pdf",  //-uq

    ],

    "CMAA": [

        "CMAACOR01T-2022.pdf",  //-uq
        "CMAACOR02T-2022.pdf",  //-uq
        "CMAACOR03T-2021.pdf",  //-uq
        "CMAACOR03T-2022.pdf",  //-uq
        "CMAACOR04T-2021.pdf",  //-uq
        "CMAACOR04T-2022.pdf",  //-uq
        "CMAACOR05T-2022.pdf",  //-uq
        "CMAACOR06T-2022.pdf",  //-uq
        "CMAACOR07T-2022.pdf",  //-uq
        "CMAACOR08T-2022.pdf",  //-uq
        "CMAACOR09T-2022.pdf",  //-uq
        "CMAACOR10T-2021.pdf",  //-uq
        "CMAACOR10T-2022.pdf",  //-uq
        "CMAACOR11T-2022.pdf",  //-uq
        "CMAACOR12T-2022.pdf",  //-uq
        "CMAACOR13T-2022.pdf",  //-uq
        "CMAACOR14T-2022.pdf",  //-uq

        "CMAADSE01T-2022.pdf",  //-uq
        "CMAADSE02T-2022.pdf",  //-uq
        "CMAADSE03T-2022.pdf",  //-uq
        "CMAADSE04T-2022.pdf",  //-uq

    ],

    "CMAG": [

        "CMAGCOR01T-2021.pdf",  //-uq
        "CMAGCOR01T-2022.pdf",  //-uq
        "CMAGCOR02T-2021.pdf",  //-uq
        "CMAGCOR02T-2022.pdf",  //-uq
        "CMAGCOR03T-2021.pdf",  //-uq
        "CMAGCOR03T-2022.pdf",  //-uq
        "CMAGCOR04T-2021.pdf",  //-uq
        "CMAGCOR04T-2022.pdf",  //-uq

        "CMAGDSE01T-2021.pdf",  //-uq
        "CMAGDSE01T-2022.pdf",  //-uq
        "CMAGDSE03T-2021.pdf",  //-uq
        "CMAGDSE03T-2022.pdf",  //-uq
        "CMAGDSE04T-2021.pdf",  //-uq
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
        "CMSACOR11T-2023.pdf",  //-hq
        "CMSACOR12T-2021.pdf",  //-uq
        "CMSACOR12T-2022.pdf",  //-uq
        "CMSACOR12T-2023.pdf",  //-hq
        "CMSACOR13T-2021.pdf",  //-uq
        "CMSACOR13T-2022.pdf",  //-uq
        "CMSACOR13T-2023.pdf",  //-hq
        "CMSACOR14T-2021.pdf",  //-uq
        "CMSACOR14T-2022.pdf",  //-uq
        "CMSACOR14P-2023.pdf",  //-hq
        "CMSACOR14T-2023.pdf",  //-hq

        "CMSADSE01T-2021.pdf",  //-uq
        "CMSADSE01T-2022.pdf",  //-uq
        "CMSADSE01T-2023.pdf",  //-hq
        "CMSADSE02T-2021.pdf",  //-uq
        "CMSADSE02T-2022.pdf",  //-uq
        "CMSADSE02T-2023.pdf",  //-hq
        "CMSADSE03T-2021.pdf",  //-uq
        "CMSADSE03T-2022.pdf",  //-uq
        "CMSADSE04T-2021.pdf",  //-uq
        "CMSADSE04T-2022.pdf",  //-uq
        "CMSADSE05T-2021.pdf",  //-uq
        "CMSADSE05T-2022.pdf",  //-uq
        "CMSADSE05P-2023.pdf",  //-hq
        "CMSADSE05P-2023.pdf",  //-hq
        "CMSADSE05T-2023.pdf",  //-hq

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
        "CMSG-4A-supple-2021.pdf",  //-uq

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

    "DFSG": [

        "DFSGCOR01T-2022.pdf",  //-uq
        "DFSGCOR02T-2021.pdf",  //-uq
        "DFSGCOR02T-2022.pdf",  //-uq
        "DFSGCOR03T-2022.pdf",  //-uq
        "DFSGCOR04T-2021.pdf",  //-uq
        "DFSGCOR04T-2022.pdf",  //-uq

        "DFSGDSE02T-2022.pdf",  //-uq
        "DFSGDSE06T-2021.pdf",  //-uq
        "DFSGDSE06T-2022.pdf",  //-uq
        "DFSGGEC01T-2022.pdf",  //-uq
        "DFSGGEC02T-2021.pdf",  //-uq
        "DFSGGEC02T-2022.pdf",  //-uq

    ],

    "ECOA": [

        "ECOACOR01T-2022.pdf",  //-uq
        "ECOACOR02T-2022.pdf",  //-uq
        "ECOACOR03T-2021.pdf",  //-uq
        "ECOACOR03T-2022.pdf",  //-uq
        "ECOACOR04T-2021.pdf",  //-uq
        "ECOACOR04T-2022.pdf",  //-uq
        "ECOACOR05T-2022.pdf",  //-uq
        "ECOACOR06T-2022.pdf",  //-uq
        "ECOACOR07T-2022.pdf",  //-uq
        "ECOACOR08T-2022.pdf",  //-uq
        "ECOACOR09T-2022.pdf",  //-uq
        "ECOACOR10T-2021.pdf",  //-uq
        "ECOACOR10T-2022.pdf",  //-uq
        "ECOACOR11T-2022.pdf",  //-uq
        "ECOACOR12T-2022.pdf",  //-uq
        "ECOACOR13T-2021.pdf",  //-uq
        "ECOACOR13T-2022.pdf",  //-uq
        "ECOACOR14T-2021.pdf",  //-uq
        "ECOACOR14T-2022.pdf",  //-uq

        "ECOADSE01T-2022.pdf",  //-uq
        "ECOADSE02T-2022.pdf",  //-uq
        "ECOADSE03T-2022.pdf",  //-uq
        "ECOADSE04T-2021.pdf",  //-uq
        "ECOADSE04T-2022.pdf",  //-uq
        "ECOADSE05T-2021.pdf",  //-uq
        "ECOADSE05T-2022.pdf",  //-uq

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
        "ECOGDSE04T-2021.pdf",  //-uq

        "ECOGCOR01T-2022.pdf",  //-uq
        "ECOGCOR02T-2021.pdf",  //-uq
        "ECOGCOR02T-2022.pdf",  //-uq
        "ECOGCOR03T-2021.pdf",  //-uq
        "ECOGCOR03T-2022.pdf",  //-uq
        "ECOGCOR03T-supple-2021.pdf",  //-uq
        "ECOGCOR04T-2021.pdf",  //-uq
        "ECOGCOR04T-2022.pdf",  //-uq

        "ECOGDSE01T-2022.pdf",  //-uq
        "ECOGDSE02T-2022.pdf",  //-uq
        "ECOGDSE03T-2021.pdf",  //-uq
        "ECOGDSE03T-2022.pdf",  //-uq
        "ECOGDSE04T-2021.pdf",  //-uq
        "ECOGDSE04T-2022.pdf",  //-uq

        "ECOGGEC01T-2021.pdf",  //-uq
        "ECOGGEC01T-2022.pdf",  //-uq
        "ECOGGEC01T-supple-2021.pdf",  //-uq
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
        "EDCACOR01T-2022.pdf",  //-uq
        "EDCACOR01T-supple-2021.pdf",  //-uq
        "EDCACOR02T-2021.pdf",  //-uq
        "EDCACOR02T-2022.pdf",  //-uq
        "EDCACOR02T-supple-2021.pdf",  //-uq
        "EDCACOR03T-2021.pdf",  //-uq
        "EDCACOR03T-2022.pdf",  //-uq
        "EDCACOR03T-supple-2021.pdf",  //-uq
        "EDCACOR04T-2021.pdf",  //-uq
        "EDCACOR04T-2022.pdf",  //-uq
        "EDCACOR04T-supple-2021.pdf",  //-uq
        "EDCACOR05T-2021.pdf",  //-uq
        "EDCACOR05T-2022.pdf",  //-uq
        "EDCACOR06T-2021.pdf",  //-uq
        "EDCACOR06T-2022.pdf",  //-uq
        "EDCACOR07T-2021.pdf",  //-uq
        "EDCACOR07T-2022.pdf",  //-uq
        "EDCACOR08T-2021.pdf",  //-uq
        "EDCACOR08T-2022.pdf",  //-uq
        "EDCACOR09T-2021.pdf",  //-uq
        "EDCACOR09T-2022.pdf",  //-uq
        "EDCACOR10T-2021.pdf",  //-uq
        "EDCACOR10T-2022.pdf",  //-uq
        "EDCACOR10T-supple-2021.pdf",  //-uq
        "EDCACOR11T-2021.pdf",  //-uq
        "EDCACOR11T-2022.pdf",  //-uq
        "EDCACOR11T-supple-2021.pdf",  //-uq
        "EDCACOR12T-2022.pdf",  //-uq
        "EDCACOR13T-2021.pdf",  //-uq
        "EDCACOR13T-2022.pdf",  //-uq
        "EDCACOR14T-2021.pdf",  //-uq
        "EDCACOR14T-2022.pdf",  //-uq

        "EDCADSE01T-2021.pdf",  //-uq
        "EDCADSE01T-2022.pdf",  //-uq
        "EDCADSE01T-supple-2021.pdf",  //-uq
        "EDCADSE02T-2022.pdf",  //-uq
        "EDCADSE03T-2021.pdf",  //-uq
        "EDCADSE03T-2022.pdf",  //-uq
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
        "EDCG-1-supple-2021.pdf",  //-uq
        "EDCG-2-2015.pdf", //-hq
        "EDCG-2-2016.pdf",  //-hq
        "EDCD-2-2017.pdf",  //-mq
        "EDCG-2-2018.pdf",  //-mq
        "EDCG-4-2016.pdf",  //-hq
        "EDCG-4-2017.pdf",  //-mq
        "EDCG-4-2018.pdf",  //-mq
        "EDCG-4-2022.pdf",  //-hq
        "EDCG-4-supple-2021.pdf",  //-uq

        "EDCGCOR01T-2021.pdf",  //-uq
        "EDCGCOR01T-2022.pdf",  //-uq
        "EDCGCOR01T-supple-2021.pdf",  //-uq
        "EDCGCOR02T-2021.pdf",  //-uq
        "EDCGCOR02T-2022.pdf",  //-uq
        "EDCGCOR02T-supple-2021.pdf",  //-uq
        "EDCGCOR03T-2022.pdf",  //-uq
        "EDCGCOR03T-supple-2021.pdf",  //-uq
        "EDCGCOR04T-2021.pdf",  //-uq
        "EDCGCOR04T-2022.pdf",  //-uq
        "EDCGCOR04T-supple-2021.pdf",  //-uq

        "EDCGDSE01T-2022.pdf",  //-uq
        "EDCGDSE01T-supple-2021.pdf",  //-uq
        "EDCGDSE02T-2021.pdf",  //-uq
        "EDCGDSE02T-2022.pdf",  //-uq
        "EDCGDSE02T-supple-2021.pdf",  //-uq
        "EDCGDSE03T-2021.pdf",  //-uq
        "EDCGDSE03T-2022.pdf",  //-uq
        "EDCGDSE04T-2021.pdf",  //-uq
        "EDCGDSE04T-2022.pdf",  //-uq

        "EDCGGEC01T-2021.pdf",  //-uq
        "EDCGGEC01T-2022.pdf",  //-uq
        "EDCGGEC01T-supple-2021.pdf",  //-uq
        "EDCGGEC02T-2021.pdf",  //-uq
        "EDCGGEC02T-2022.pdf",  //-uq

    ],

    "ELSA": [

        "ELSACOR01T-2022.pdf",  //-uq
        "ELSACOR02T-2022.pdf",  //-uq
        "ELSACOR03T-2021.pdf",  //-uq
        "ELSACOR03T-2022.pdf",  //-uq
        "ELSACOR04T-2021.pdf",  //-uq
        "ELSACOR04T-2022.pdf",  //-uq
        "ELSACOR05T-2022.pdf",  //-uq
        "ELSACOR06T-2022.pdf",  //-uq
        "ELSACOR07T-2022.pdf",  //-uq
        "ELSACOR08T-2022.pdf",  //-uq
        "ELSACOR09T-2022.pdf",  //-uq
        "ELSACOR10T-2021.pdf",  //-uq
        "ELSACOR10T-2022.pdf",  //-uq
        "ELSACOR11T-2022.pdf",  //-uq
        "ELSACOR12T-2022.pdf",  //-uq
        "ELSACOR13T-2021.pdf",  //-uq
        "ELSACOR13T-2022.pdf",  //-uq
        "ELSACOR14T-2021.pdf",  //-uq
        "ELSACOR14T-2022.pdf",  //-uq

        "ELSADSE01T-2022.pdf",  //-uq
        "ELSADSE02T-2022.pdf",  //-uq
        "ELSADSE03T-2022.pdf",  //-uq
        "ELSADSE04T-2021.pdf",  //-uq
        "ELSADSE04T-2022.pdf",  //-uq
        "ELSADSE05T-2021.pdf",  //-uq
        "ELSADSE05T-2022.pdf",  //-uq
        "ELSADSE06T-2021.pdf",  //-uq
        "ELSADSE06T-2022.pdf",  //-uq

    ],

    "ELSG": [

        "ELSGCOR01T-2022.pdf",  //-uq
        "ELSGCOR02T-2021.pdf",  //-uq
        "ELSGCOR02T-2022.pdf",  //-uq
        "ELSGCOR03T-2022.pdf",  //-uq
        "ELSGCOR04T-2021.pdf",  //-uq
        "ELSGCOR04T-2022.pdf",  //-uq

        "ELSGDSE02T-2022.pdf",  //-uq
        "ELSGDSE03T-2022.pdf",  //-uq
        "ELSGDSE04T-2022.pdf",  //-uq
        "ELSGDSE05T-2021.pdf",  //-uq
        "ELSGDSE06T-2021.pdf",  //-uq

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
        "ENGACOR01T-2022.pdf",
        "ENGACOR01T-supple-2021.pdf",
        "ENGACOR02T-2021.pdf",  //-uq
        "ENGACOR02T-2022.pdf",  //-uq
        "ENGACOR02T-supple-2021.pdf",
        "ENGACOR03T-2021.pdf",  //-uq
        "ENGACOR03T-2022.pdf",  //-uq
        "ENGACOR03T-supple-2021.pdf",
        "ENGACOR04T-2020.pdf",  //-uq
        "ENGACOR04T-2021.pdf",  //-uq
        "ENGACOR04T-2022.pdf",  //-uq
        "ENGACOR04T-supple-2021.pdf",
        "ENGACOR05T-2021.pdf",  //-uq
        "ENGACOR05T-2022.pdf",  //-uq
        "ENGACOR05T-supple-2021.pdf",
        "ENGACOR06T-2021.pdf",  //-uq
        "ENGACOR06T-2022.pdf",  //-uq
        "ENGACOR06T-supple-2021.pdf",
        "ENGACOR07T-2021.pdf",  //-uq
        "ENGACOR07T-2022.pdf",  //-uq
        "ENGACOR07T-supple-2021.pdf",
        "ENGACOR08T-2021.pdf",  //-uq
        "ENGACOR08T-2022.pdf",  //-uq
        "ENGACOR08T-supple-2021.pdf",
        "ENGACOR09T-2021.pdf",  //-uq
        "ENGACOR09T-2022.pdf",  //-uq
        "ENGACOR09T-supple-2021.pdf",
        "ENGACOR10T-2021.pdf",  //-uq
        "ENGACOR10T-2022.pdf",  //-uq
        "ENGACOR11T-2022.pdf",  //-uq
        "ENGACOR12T-2022.pdf",  //-uq
        "ENGACOR13T-2021.pdf",
        "ENGACOR13T-2022.pdf",  //-uq
        "ENGACOR14T-2021.pdf",  //-uq
        "ENGACOR14T-2022.pdf",  //-uq

        "ENGADSE01T-2021.pdf",  //-uq
        "ENGADSE01T-2022.pdf",  //-uq
        "ENGADSE02T-2021.pdf",  //-uq
        "ENGADSE02T-2022.pdf",  //-uq
        "ENGADSE02T-supple-2021.pdf",
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
        "ENGGCOR01T-supple-2021.pdf",  //-uq
        "ENGGCOR02T-2021.pdf",  //-uq
        "ENGGCOR02T-2022.pdf",  //-uq
        "ENGGCOR02T-supple-2021.pdf",  //-uq
        "ENGGCOR03T-2021.pdf",  //-uq
        "ENGGCOR03T-2022.pdf",  //-uq
        "ENGGCOR03T-supple-2021.pdf",  //-uq
        "ENGGCOR04T-2021.pdf",  //-uq
        "ENGGCOR04T-2022.pdf",  //-uq

        "ENGGDSE01T-2021.pdf",  //-uq
        "ENGGDSE01T-2022.pdf",  //-uq
        "ENGGDSE01T-supple-2021.pdf",  //-uq
        "ENGGDSE02T-2022.pdf",  //-uq
        "ENGGDSE02T-supple-2021.pdf",  //-uq
        "ENGGDSE04T-2021.pdf",  //-uq
        "ENGGDSE04T-2022.pdf",  //-uq

        "ENGGGEC01T-2021.pdf",  //-uq
        "ENGGGEC01T-2022.pdf",  //-uq
        "ENGGGEC02T-2021.pdf",  //-uq
        "ENGGGEC02T-2022.pdf",  //-uq

        "ENGHGEC01T-2021.pdf",  //-uq

        "ENGLCOR01T-2021.pdf",  //-uq
        "ENGLCOR01T-2022.pdf",  //-uq
        "ENGLCOR01T-supple-2021.pdf",  //-uq
        "ENGLCOR02T-2021.pdf",  //-uq
        "ENGLCOR02T-2022.pdf",  //-uq
        "ENGLCOR02T-supple-2021.pdf",  //-uq

        "ENGMCOR01T-2021.pdf",  //-uq
        "ENGMCOR01T-2022.pdf",  //-uq
        "ENGMCOR01T-supple-2021.pdf",  //-uq
        "ENGMCOR02T-2021.pdf",  //-uq
        "ENGMCOR02T-2022.pdf",  //-uq
        "ENGMCOR02T-supple-2021.pdf",  //-uq

    ],

    "ENVS": [

        "ENVSAEC01T-2022.pdf",  //-uq

    ],

    "EVSG": [

        "EVSGCOR01T-2021.pdf",  //-uq
        "EVSGCOR01T-2022.pdf",  //-uq
        "EVSGCOR02T-2021.pdf",  //-uq
        "EVSGCOR02T-2022.pdf",  //-uq
        "EVSGCOR03T-2021.pdf",  //-uq
        "EVSGCOR03T-2022.pdf",  //-uq
        "EVSGCOR04T-2021.pdf",  //-uq
        "EVSGCOR04T-2022.pdf",  //-uq

        "EVSGDSE01T-2022.pdf",  //-uq
        "EVSGDSE02T-2022.pdf",  //-uq
        "EVSGDSE03T-2022.pdf",  //-uq

    ],

    "FACA": [

        "FACA-5-2022.pdf",  //-uq

        "FACACOR01T-2021.pdf",  //-uq
        "FACACOR01T-2022.pdf",  //-uq
        "FACACOR02T-2021.pdf",  //-uq
        "FACACOR02T-2022.pdf",  //-uq
        "FACACOR03T-2021.pdf",  //-uq
        "FACACOR03T-2022.pdf",  //-uq
        "FACACOR04T-2021.pdf",  //-uq
        "FACACOR04T-2022.pdf",  //-uq
        "FACACOR05T-2021.pdf",  //-uq
        "FACACOR05T-2022.pdf",  //-uq
        "FACACOR05T-supple-2021.pdf",  //-uq
        "FACACOR06T-2021.pdf",  //-uq
        "FACACOR06T-2022.pdf",  //-uq
        "FACACOR06T-supple-2021.pdf",  //-uq
        "FACACOR07T-2021.pdf",  //-uq
        "FACACOR07T-2022.pdf",  //-uq
        "FACACOR07T-supple-2021.pdf",  //-uq
        "FACACOR08T-2021.pdf",  //-uq
        "FACACOR08T-2022.pdf",  //-uq
        "FACACOR09T-2021.pdf",  //-uq
        "FACACOR09T-2022.pdf",  //-uq
        "FACACOR10T-2021.pdf",  //-uq
        "FACACOR10T-2022.pdf",  //-uq
        "FACACOR10T-supple-2021.pdf",  //-uq
        "FACACOR11T-2021.pdf",  //-uq
        "FACACOR11T-2022.pdf",  //-uq
        "FACACOR12T-2022.pdf",  //-uq
        "FACACOR13T-2021.pdf",  //-uq
        "FACACOR13T-2022.pdf",  //-uq
        "FACACOR14T-2021.pdf",  //-uq
        "FACACOR14T-2022.pdf",  //-uq

        "FACADSE01T-2021.pdf",  //-uq
        "FACADSE01T-2022.pdf",  //-uq
        "FACADSE01T-supple-2021.pdf",  //-uq
        "FACADSE02T-2021.pdf",  //-uq
        "FACADSE02T-2022.pdf",  //-uq
        "FACADSE02T-supple-2021.pdf",  //-uq
        "FACADSE03T-2021.pdf",  //-uq
        "FACADSE03T-2022.pdf",  //-uq
        "FACADSE04T-2021.pdf",  //-uq
        "FACADSE04T-2022.pdf",  //-uq
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
        "FACGCOR05T-2022.pdf",  //-uq
        "FACGCOR05T-supple-2021.pdf",  //-uq
        "FACGCOR06T-2021.pdf",  //-uq
        "FACGCOR06T-2022.pdf",  //-uq
        "FACGCOR06T-supple-2021.pdf",  //-uq
        "FACGCOR07T-2021.pdf",  //-uq
        "FACGCOR07T-2022.pdf",  //-uq
        "FACGCOR07T-supple-2021.pdf",  //-uq
        "FACGCOR08T-2021.pdf",  //-uq
        "FACGCOR08T-2022.pdf",  //-uq
        "FACGCOR08T-supple-2021.pdf",  //-uq

        "FACGDSE01T-2021.pdf",  //-uq
        "FACGDSE01T-2022.pdf",  //-uq
        "FACGDSE02T-2022.pdf",  //-uq
        "FACGDSE03T-2022.pdf",  //-uq
        "FACGDSE04T-2021.pdf",  //-uq
        "FACGDSE04T-2022.pdf",  //-uq
        "FACGDSE05T-2022.pdf",  //-uq
        "FACGDSE06T-2021.pdf",  //-uq
        "FACGDSE06T-2022.pdf",  //-uq
        "FACGDSE07T-2021.pdf",  //-uq
        "FACGDSE07T-2022.pdf",  //-uq
        "FACGDSE08T-2021.pdf",  //-uq
        "FACGDSE08T-2022.pdf",  //-uq
        "FACGDSE09T-2021.pdf",  //-uq
        "FACGDSE09T-2022.pdf",  //-uq
        "FACGDSE10T-2021.pdf",  //-uq
        "FACGDSE10T-2022.pdf",  //-uq
        "FACGDSE11T-2022.pdf",  //-uq

        "FACGGEC01T-2021.pdf",  //-uq
        "FACGGEC01T-2022.pdf",  //-uq
        "FACGGEC02T-2021.pdf",  //-uq
        "FACGGEC02T-2022.pdf",  //-uq

        "FACHGEC01T-2021.pdf",  //-uq
        "FACHGEC01T-2022.pdf",  //-uq
        "FACHGEC02T-2021.pdf",  //-uq
        "FACHGEC02T-2022.pdf",  //-uq
        "FACHGEC03T-2021.pdf",  //-uq
        "FACHGEC03T-2022.pdf",  //-uq
        "FACHGEC03T-supple-2021.pdf",  //-uq
        "FACHGEC04T-2021.pdf",  //-uq
        "FACHGEC04T-2022.pdf",  //-uq

    ],

    "FMNG": [

        "FMNG-5-2022.pdf",  //-hq

    ],

    "FMSG": [

        "FMSG-4-supple-2021.pdf",  //-uq

        "FMSGCOR01T-2022.pdf",  //-uq
        "FMSGCOR02T-2022.pdf",  //-uq
        "FMSGCOR03T-2022.pdf",  //-uq
        "FMSGCOR04T-2021.pdf",  //-uq
        "FMSGCOR04T-2022.pdf",  //-uq

        "FMSGDSE01T-2022.pdf",  //-uq
        "FMSGDSE02T-2022.pdf",  //-uq
        "FMSGDSE03T-2021.pdf",  //-uq
        "FMSGDSE03T-2022.pdf",  //-uq
        "FMSGDSE04T-2021.pdf",  //-uq
        "FMSGDSE04T-2022.pdf",  //-uq

        "FMSGGEC01T-2022.pdf",  //-uq
        "FMSGGEC02T-2021.pdf",  //-uq
        "FMSGGEC02T-2022.pdf",  //-uq

    ],

    "FNTA": [

        "FNTACOR01T-2022.pdf",  //-uq
        "FNTACOR02T-2022.pdf",  //-uq
        "FNTACOR03T-2021.pdf",  //-uq
        "FNTACOR03T-2022.pdf",  //-uq
        "FNTACOR04T-2021.pdf",  //-uq
        "FNTACOR04T-2022.pdf",  //-uq
        "FNTACOR05T-2022.pdf",  //-uq
        "FNTACOR06T-2022.pdf",  //-uq
        "FNTACOR06T-supple-2021.pdf",  //-uq
        "FNTACOR07T-2022.pdf",  //-uq
        "FNTACOR08T-2022.pdf",  //-uq
        "FNTACOR09T-2022.pdf",  //-uq
        "FNTACOR10T-2021.pdf",  //-uq
        "FNTACOR10T-2022.pdf",  //-uq
        "FNTACOR11T-2022.pdf",  //-uq
        "FNTACOR12T-2022.pdf",  //-uq
        "FNTACOR13T-2021.pdf",  //-uq
        "FNTACOR014T-2022.pdf",  //-uq
        "FNTACOR14T-2021.pdf",  //-uq

        "FNTADSE01T-2022.pdf",  //-uq
        "FNTADSE02T-2022.pdf",  //-uq
        "FNTADSE03T-2022.pdf",  //-uq
        "FNTADSE04T-2021.pdf",  //-uq
        "FNTADSE04T-2022.pdf",  //-uq
        "FNTADSE05T-2021.pdf",  //-uq
        "FNTADSE05T-2022.pdf",  //-uq
        "FNTADSE06T-2021.pdf",  //-uq
        "FNTADSE06T-2022.pdf",  //-uq

    ],

    "FNTG": [

        "FNTGCOR01T-2022.pdf",  //-uq
        "FNTGCOR02T-2021.pdf",  //-uq
        "FNTGCOR03T-2022.pdf",  //-uq

        "FNTGDSE01T-2022.pdf",  //-uq
        "FNTGDSE02T-2022.pdf",  //-uq
        "FNTGDSE03T-2021.pdf",  //-uq
        "FNTGDSE03T-2022.pdf",  //-uq
        "FNTGDSE04T-2021.pdf",  //-uq
        "FNTGDSE04T-2022.pdf",  //-uq

    ],

    "GEOA": [

        "GEOA-5-2022.pdf",  //-uq
        "GEOA-6-2022.pdf",  //-uq

        "GEOACOR01T-2021.pdf",  //-uq
        "GEOACOR01T-2022.pdf",  //-uq
        "GEOACOR02T-2021.pdf",  //-uq
        "GEOACOR02T-2022.pdf",  //-uq
        "GEOACOR03T-2021.pdf",  //-uq
        "GEOACOR03T-2022.pdf",  //-uq
        "GEOACOR04T-2021.pdf",  //-uq
        "GEOACOR04T-2022.pdf",  //-uq
        "GEOACOR05T-2021.pdf",  //-uq
        "GEOACOR05T-2022.pdf",  //-uq
        "GEOACOR05T-supple-2021.pdf",  //-uq
        "GEOACOR06T-2021.pdf",  //-uq
        "GEOACOR06T-2022.pdf",  //-uq
        "GEOACOR07T-2021.pdf",  //-uq
        "GEOACOR07T-2022.pdf",  //-uq
        "GEOACOR08T-2021.pdf",  //-uq
        "GEOACOR08T-2022.pdf",  //-uq
        "GEOACOR09T-2021.pdf",  //-uq
        "GEOACOR09T-2022.pdf",  //-uq
        "GEOACOR09T-supple-2021.pdf",  //-uq
        "GEOACOR10T-2021.pdf",  //-uq
        "GEOACOR10T-2022.pdf",  //-uq
        "GEOACOR11T-2021.pdf",  //-uq
        "GEOACOR11T-2022.pdf",  //-uq
        "GEOACOR12T-2022.pdf",  //-uq
        "GEOACOR13T-2021.pdf",  //-uq
        "GEOACOR13T-2022.pdf",  //-uq
        "GEOACOR14T-2021.pdf",  //-uq
        "GEOACOR14T-2022.pdf",  //-uq


        "GEOADSE01T-2021.pdf",  //-uq
        "GEOADSE01T-2022.pdf",  //-uq
        "GEOADSE02T-2021.pdf",  //-uq
        "GEOADSE02T-2022.pdf",  //-uq
        "GEOADSE03T-2021.pdf",  //-uq
        "GEOADSE03T-2022.pdf",  //-uq
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
        "GEOGCOR03T-2022.pdf",  //-uq
        "GEOGCOR04T-2021.pdf",  //-uq
        "GEOGCOR04T-2022.pdf",  //-uq

        "GEOGDSE01T-2021.pdf",  //-uq
        "GEOGDSE01T-2022.pdf",  //-uq
        "GEOGDSE02T-2021.pdf",  //-uq
        "GEOGDSE03T-2022.pdf",  //-uq

    ],

    "HINA": [

        "HINA-5-2022.pdf",  //-hq
        "HINA-6-2022.pdf",  //-hq
        "HINA-8-2022.pdf",  //-hq

        "HINACOR01T-2022.pdf",  //-uq
        "HINACOR02T-2022.pdf",  //-uq
        "HINACOR03T-2021.pdf",  //-uq
        "HINACOR03T-2022.pdf",  //-uq
        "HINACOR04T-2021.pdf",  //-uq
        "HINACOR04T-2022.pdf",  //-uq
        "HINACOR05T-2022.pdf",  //-uq
        "HINACOR05T-supple-2021.pdf",  //-uq
        "HINACOR06T-2022.pdf",  //-uq
        "HINACOR06T-supple-2021.pdf",  //-uq
        "HINACOR07T-2022.pdf",  //-uq
        "HINACOR07T-supple-2021.pdf",  //-uq
        "HINACOR08T-2022.pdf",  //-uq
        "HINACOR08T-supple-2021.pdf",  //-uq
        "HINACOR09T-2022.pdf",  //-uq
        "HINACOR10T-2021.pdf",  //-uq
        "HINACOR10T-2022.pdf",  //-uq
        "HINACOR11T-2022.pdf",  //-uq
        "HINACOR12T-2022.pdf",  //-uq
        "HINACOR13T-2021.pdf",  //-uq
        "HINACOR13T-2022.pdf",  //-uq
        "HINACOR14T-2021.pdf",  //-uq
        "HINACOR14T-2022.pdf",  //-uq

        "HINADSE01T-2022.pdf",  //-uq
        "HINADSE02T-2022.pdf",  //-uq
        "HINADSE03T-2022.pdf",  //-uq
        "HINADSE05T-2021.pdf",  //-uq
        "HINADSE05T-2022.pdf",  //-uq
        "HINADSE06T-2021.pdf",  //-uq
        "HINADSE06T-2022.pdf",  //-uq

    ],

    "HING": [

        "HING-4-2022.pdf",  //-hq

        "HINGCOR01T-2021.pdf",  //-uq
        "HINGCOR01T-2022.pdf",  //-uq
        "HINGCOR02T-2021.pdf",  //-uq
        "HINGCOR02T-2022.pdf",  //-uq
        "HINGCOR03T-2021.pdf",  //-uq
        "HINGCOR03T-2022.pdf",  //-uq
        "hINGCOR03T-supple-2021.pdf",  //-uq
        "HINGCOR04T-2021.pdf",  //-uq
        "HINGCOR04T-2022.pdf",  //-uq

        "HINGDSE01T-2021.pdf",  //-uq
        "HINGDSE01T-2022.pdf",  //-uq
        "HINGDSE01T-supple-2021.pdf",  //-uq
        "HINGDSE02T-2021.pdf",  //-uq
        "HINGDSE02T-2022.pdf",  //-uq
        "HINGDSE03T-2021.pdf",  //-uq
        "HINGDSE03T-2022.pdf",  //-uq
        "HINGDSE04T-2021.pdf",  //-uq
        "HINGDSE04T-2022.pdf",  //-uq

        "HINGGEC01T-2021.pdf",  //-uq
        "HINGGEC01T-2022.pdf",  //-uq
        "HINGGEC02T-2021.pdf",  //-uq
        "HINGGEC02T-2022.pdf",  //-uq
        "HINHGEC04T-supple-2021.pdf",  //-uq

        "HINLCOR01T-2021.pdf",  //-uq
        "HINLCOR01T-2022.pdf",  //-uq
        "HINLCOR01T-supple-2021.pdf",  //-uq
        "HINLCOR02T-2021.pdf",  //-uq
        "HINLCOR02T-2022.pdf",  //-uq
        "HINLCOR02T-supple-2021.pdf",  //-uq

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
        "HISACOR01T-2022.pdf",
        "HISACOR01T-supple-2021.pdf",
        "HISACOR02T-2021.pdf",  //-uq
        "HISACOR02T-2022.pdf",  //-uq
        "HISACOR02T-supple-2021.pdf",
        "HISACOR03T-2021.pdf",  //-uq
        "HISACOR03T-2022.pdf",  //-uq
        "HISACOR03T-supple-2021.pdf",
        "HISACOR04T-2021.pdf",  //-uq
        "HISACOR04T-2022.pdf",  //-uq
        "HISACOR04T-supple-2021.pdf",
        "HISACOR05T-2021.pdf",  //-uq
        "HISACOR05T-2022.pdf",
        "HISACOR05T-supple-2021.pdf",
        "HISACOR06T-2021.pdf",  //-uq
        "HISACOR06T-2022.pdf",
        "HISACOR06T-supple-2021.pdf",
        "HISACOR07T-2021.pdf",  //-uq
        "HISACOR07T-2022.pdf",
        "HISACOR07T-supple-2021.pdf",
        "HISACOR08T-2021.pdf",  //-uq
        "HISACOR08T-2022.pdf",  //-uq
        "HISACOR09T-2021.pdf",  //-uq
        "HISACOR09T-2022.pdf",  //-uq
        "HISACOR10T-2021.pdf",  //-uq
        "HISACOR10T-2022.pdf",  //-uq
        "HISACOR11T-2021.pdf",  //-uq
        "HISACOR11T-2022.pdf",  //-uq
        "HISACOR12T-2022.pdf",  //-uq
        "HISACOR13T-2021.pdf",
        "HISACOR13T-2022.pdf",  //-uq
        "HISACOR14T-2021.pdf",  //-uq
        "HISACOR14T-2022.pdf",  //-uq

        "HISADSE01T-2021.pdf",  //-uq
        "HISADSE02T-2021.pdf",  //-uq
        "HISADSE02T-2022.pdf",  //-uq
        "HISADSE03T-2022.pdf",
        "HISADSE04T-2021.pdf",  //-uq
        "HISADSE04T-2022.pdf",  //-uq
        "HISADSE05T-2021.pdf",  //-uq
        "HISADSE05T-2022.pdf",  //-uq

    ],

    "HISG": [

        "HISG-1-2014.pdf",  //-hq
        "HISG-1-supple-2021.pdf",  //-uq
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
        "HISGCOR01T-2022.pdf",  //-uq
        "HISGCOR01T-supple-2021.pdf",  //-uq
        "HISGCOR02T-2021.pdf",  //-uq
        "HISGCOR02T-2022.pdf",  //-uq
        "HISGCOR02T-supple-2021.pdf",  //-uq
        "HISGCOR03T-2021.pdf",  //-uq
        "HISGCOR03T-2022.pdf",  //-uq
        "HISGCOR03T-supple-2021.pdf",  //-uq
        "HISGCOR04T-2021.pdf",  //-uq
        "HISGCOR04T-2022.pdf",  //-uq
        "HISGCOR04T-supple-2021.pdf",  //-uq

        "HISGDSE01T-2021.pdf",  //-uq
        "HISGDSE01T-2022.pdf",  //-uq
        "HISGDSE01T-supple-2021.pdf",  //-uq
        "HISGDSE02T-2021.pdf",  //-uq
        "HISGDSE02T-2022.pdf",  //-uq
        "HISGDSE04T-2021.pdf",  //-uq
        "HISGDSE04T-2022.pdf",  //-uq

        "HISGGEC01T-2021.pdf",  //-uq
        "HISGGEC01T-2022.pdf",  //-uq
        "HISGGEC01T-supple-2021.pdf",  //-uq
        "HISGGEC02T-2021.pdf",  //-uq
        "HISGGEC02T-2022.pdf",  //-uq

    ],

    "HMDA": [

        "HMDACOR01T-2022.pdf",  //-uq
        "HMDACOR02T-2022.pdf",  //-uq
        "HMDACOR03T-2021.pdf",  //-uq
        "HMDACOR03T-2022.pdf",  //-uq
        "HMDACOR04T-2021.pdf",  //-uq
        "HMDACOR04T-2022.pdf",  //-uq
        "HMDACOR05T-2022.pdf",  //-uq
        "HMDACOR06T-2022.pdf",  //-uq
        "HMDACOR07T-2022.pdf",  //-uq
        "HMDACOR08T-2022.pdf",  //-uq
        "HMDACOR09T-2022.pdf",  //-uq
        "HMDACOR10T-2021.pdf",  //-uq
        "HMDACOR10T-2022.pdf",  //-uq
        "HMDACOR11T-2022.pdf",  //-uq
        "HMDACOR12T-2022.pdf",  //-uq
        "HMDACOR13T-2021.pdf",  //-uq
        "HMDACOR13T-2022.pdf",  //-uq
        "HMDACOR14T-2021.pdf",  //-uq
        "HMDACOR14T-2022.pdf",  //-uq

        "HMDADSE01T-2022.pdf",  //-uq
        "HMDADSE02T-2022.pdf",  //-uq
        "HMDADSE03T-2022.pdf",  //-uq
        "HMDADSE04T-2021.pdf",  //-uq
        "HMDADSE04T-2022.pdf",  //-uq
        "HMDADSE05T-2021.pdf",  //-uq
        "HMDADSE05T-2022.pdf",  //-uq
        "HMDADSE06T-2021.pdf",  //-uq
        "HMDADSE06T-2022.pdf",  //-uq

    ],

    "HMDG": [

        "HMDG-4A-2022.pdf",  //-hq

        "HMDGCOR01T-2022.pdf",  //-uq
        "HMDGCOR02T-2021.pdf",  //-uq
        "HMDGCOR02T-2022.pdf",  //-uq
        "HMDGCOR03T-2022.pdf",  //-uq
        "HMDGCOR04T-2021.pdf",  //-uq
        "HMDGCOR04T-2022.pdf",  //-uq

        "HMDGDSE01T-2022.pdf",  //-uq
        "HMDGDSE02T-2022.pdf",  //-uq
        "HMDGDSE03T-2022.pdf",  //-uq
        "HMDGDSE04T-2022.pdf",  //-uq

        "HMDGGEC01T-2022.pdf",  //-uq
        "HMDGGEC02T-2021.pdf",  //-uq
        "HMDGGEC02T-2022.pdf",  //-uq

    ],

    "HURG": [

        "HURGCOR01T-2022.pdf",  //-uq
        "HURGCOR02T-2022.pdf",  //-uq
        "HURGCOR03T-2022.pdf",  //-uq
        "HURGCOR04T-2021.pdf",  //-uq
        "HURGCOR04T-2022.pdf",  //-uq

        "HURGDSE01T-2022.pdf",  //-uq
        "HURGDSE03T-2022.pdf",  //-uq

    ],

    "IFFA": [

        "IFFACOR01T-2022.pdf",  //-uq
        "IFFACOR02T-2022.pdf",  //-uq
        "IFFACOR03T-2021.pdf",  //-uq
        "IFFACOR03T-2022.pdf",  //-uq
        "IFFACOR04T-2021.pdf",  //-uq
        "IFFACOR04T-2022.pdf",  //-uq
        "IFFACOR05T-2022.pdf",  //-uq
        "IFFACOR06T-2022.pdf",  //-uq
        "IFFACOR07T-2022.pdf",  //-uq
        "IFFACOR08T-2022.pdf",  //-uq
        "IFFACOR09T-2022.pdf",  //-uq
        "IFFACOR10T-2021.pdf",  //-uq
        "IFFACOR10T-2022.pdf",  //-uq
        "IFFACOR11T-2022.pdf",  //-uq
        "IFFACOR12T-2022.pdf",  //-uq
        "IFFACOR13T-2021.pdf",  //-uq
        "IFFACOR13T-2022.pdf",  //-uq
        "IFFACOR14T-2021.pdf",  //-uq
        "IFFACOR14T-2022.pdf",  //-uq

        "IFFADSE01T-2022.pdf",  //-uq
        "IFFADSE03T-2022.pdf",  //-uq
        "IFFADSE04T-2021.pdf",  //-uq
        "IFFADSE04T-2022.pdf",  //-uq
        "IFFADSE05T-2021.pdf",  //-uq
        "IFFADSE05T-2022.pdf",  //-uq

    ],

    "JORA": [

        "JORA-5-2022.pdf",  //-hq
        "JORA-6-2022.pdf",  //-hq

        "JORACOR01T-new-2022.pdf",
        "JORACOR01T-old-2022.pdf",
        "JORACOR02T-new-2022.pdf",
        "JORACOR02T-old-2022.pdf",
        "JORACOR03T-2021.pdf",
        "JORACOR03T-2022.pdf",
        "JORACOR04T-2021.pdf",
        "JORACOR04T-2022.pdf",
        "JORACOR05T-2022.pdf",
        "JORACOR05T-supple-2021.pdf",
        "JORACOR06T-2022.pdf",
        "JORACOR07T-2022.pdf",
        "JORACOR07T-supple-2021.pdf",
        "JORACOR08T-2022.pdf",
        "JORACOR09T-2022.pdf",
        "JORACOR10T-2021.pdf",
        "JORACOR10T-2022.pdf",
        "JORACOR11T-2022.pdf",
        "JORACOR12T-2022.pdf",
        "JORACOR13T-2021.pdf",
        "JORACOR13T-2022.pdf",
        "JORACOR14T-2021.pdf",
        "JORACOR14T-2022.pdf",

        "JORADSE01T-2022.pdf",
        "JORADSE02T-2022.pdf",
        "JORADSE03T-2022.pdf",
        "JORADSE04T-2021.pdf",
        "JORADSE04T-2022.pdf",
        "JORADSE05T-2021.pdf",
        "JORADSE05T-2022.pdf",
        "JORADSE06T-2021.pdf",
        "JORADSE06T-2022.pdf",

    ],

    "JORG": [

        "JORGCOR01T-new-2022.pdf",  //-uq
        "JORGCOR01T-old-2022.pdf",  //-uq
        "JORGCOR02T-2021.pdf",  //-uq
        "JORGCOR02T-2022.pdf",  //-uq
        "JORGCOR03T-2022.pdf",  //-uq
        "JORGCOR03T-supple-2021.pdf",  //-uq
        "JORGCOR04T-2021.pdf",  //-uq
        "JORGCOR04T-2022.pdf",  //-uq

        "JORGDSE01T-2022.pdf",  //-uq
        "JORGDSE01T-supple-2021.pdf",  //-uq
        "JORGDSE02T-2022.pdf",  //-uq
        "JORGDSE03T-2021.pdf",  //-uq
        "JORGDSE03T-2022.pdf",  //-uq
        "JORGDSE04T-2021.pdf",  //-uq
        "JORGDSE04T-2022.pdf",  //-uq

        "JORGGEC01T-2022.pdf",  //-uq
        "JORGGEC01T-supple-2021.pdf",  //-uq
        "JORGGEC02T-2021.pdf",  //-uq
        "JORGGEC02T-2022.pdf",  //-uq

    ],

    "MCBA": [

        "MCBACOR01T-2022.pdf",
        "MCBACOR02T-2022.pdf",
        "MCBACOR03T-2021.pdf",
        "MCBACOR03T-2022.pdf",
        "MCBACOR04T-2021.pdf",
        "MCBACOR04T-2022.pdf",
        "MCBACOR05T-2022.pdf",
        "MCBACOR06T-2022.pdf",
        "MCBACOR07T-2022.pdf",
        "MCBACOR08T-2022.pdf",
        "MCBACOR09T-2022.pdf",
        "MCBACOR10T-2021.pdf",
        "MCBACOR10T-2022.pdf",
        "MCBACOR11T-2022.pdf",
        "MCBACOR12T-2022.pdf",
        "MCBACOR13T-2021.pdf",
        "MCBACOR13T-2022.pdf",
        "MCBACOR14T-2021.pdf",
        "MCBACOR14T-2022.pdf",

        "MCBADSE01T-2022.pdf",
        "MCBADSE02T-2022.pdf",
        "MCBADSE03T-2022.pdf",
        "MCBADSE04T-2021.pdf",
        "MCBADSE04T-2022.pdf",
        "MCBADSE05T-2021.pdf",
        "MCBADSE06T-2021.pdf",
        "MCBADSE06T-2022.pdf",

    ],

    "MCBG": [

        "MCBG-4-2022.pdf",  //-hq

        "MCBGCOR01T-2022.pdf",  //-uq
        "MCBGCOR02T-2021.pdf",  //-uq
        "MCBGCOR02T-2022.pdf",  //-uq
        "MCBGCOR03T-2022.pdf",  //-uq
        "MCBGCOR04T-2021.pdf",  //-uq
        "MCBGCOR04T-2022.pdf",  //-uq

        "MCBGDSE01T-2022.pdf",  //-uq
        "MCBGDSE02T-2022.pdf",  //-uq
        "MCBGDSE03T-2021.pdf",  //-uq
        "MCBGDSE03T-2022.pdf",  //-uq

    ],

    "MLBG": [

        "MLBGCOR01T-2022.pdf",  //-uq
        "MLBGCOR02T-2021.pdf",  //-uq
        "MLBGCOR02T-2022.pdf",  //-uq
        "MLBGCOR03T-2022.pdf",  //-uq
        "MLBGCOR04T-2021.pdf",  //-uq
        "MLBGCOR04T-2022.pdf",  //-uq
        "MLBGDSE01T-2022.pdf",  //-uq
        "MLBGDSE02T-2022.pdf",  //-uq
        "MLBGDSE03T-2021.pdf",  //-uq
        "MLBGDSE03T-2022.pdf",  //-uq
        "MLBGDSE04T-2021.pdf",  //-uq
        "MLBGDSE04T-2022.pdf",  //-uq

    ],

    "MTMA": [

        "MTMA-5-2022.pdf",  //-hq
        "MTMA-6-2022.pdf",  //-hq
        "MTMA-8A-2022.pdf",  //-hq

        "MTMACOR01T-2022.pdf",  //-uq
        "MTMACOR02T-2022.pdf",  //-uq
        "MTMACOR03T-2021.pdf",  //-uq
        "MTMACOR03T-2022.pdf",  //-uq
        "MTMACOR04T-2021.pdf",  //-uq
        "MTMACOR04T-2022.pdf",  //-uq
        "MTMACOR05T-2022.pdf",  //-uq
        "MTMACOR06T-2022.pdf",  //-uq
        "MTMACOR07T-2021.pdf",  //-uq
        "MTMACOR07T-2022.pdf",  //-uq
        "MTMACOR08T-2022.pdf",  //-uq
        "MTMACOR09T-2022.pdf",  //-uq
        "MTMACOR10T-2021.pdf",  //-uq
        "MTMACOR10T-2022.pdf",  //-uq
        "MTMACOR11T-2021.pdf",  //-uq
        "MTMACOR11T-2022.pdf",  //-uq
        "MTMACOR12T-2022.pdf",  //-uq
        "MTMACOR13T-2021.pdf",  //-uq
        "MTMACOR13T-2022.pdf",  //-uq
        "MTMACOR14T-2021.pdf",  //-uq
        "MTMACOR14T-2022.pdf",  //-uq

        "MTMADSE01T-2022.pdf",  //-uq
        "MTMADSE02T-2022.pdf",  //-uq
        "MTMADSE03T-2022.pdf",  //-uq
        "MTMADSE04T-2021.pdf",  //-uq
        "MTMADSE04T-2022.pdf",  //-uq
        "MTMADSE05T-2021.pdf",  //-uq
        "MTMADSE05T-2022.pdf",  //-uq
        "MTMADSE06T-2021.pdf",  //-uq
        "MTMADSE06T-2022.pdf",  //-uq

    ],

    "MTMG": [

        "MTMG-1-2014.pdf",  //-hq
        "MTMG-1-supple-2021.pdf",  //-uq
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
        "MTMGCOR01T-2022.pdf",  //-uq
        "MTMGCOR02T-2021.pdf",  //-uq
        "MTMGCOR02T-2022.pdf",  //-uq
        "MTMGCOR03T-2021.pdf",  //-uq
        "MTMGCOR03T-2022.pdf",  //-uq
        "MTMGCOR03T-supple-2021.pdf",  //-uq
        "MTMGCOR04T-2021.pdf",  //-uq
        "MTMGCOR04T-2022.pdf",  //-uq
        "MTMGCOR04T-supple-2021.pdf",  //-uq

        "MTMGDSE01T-2021.pdf",  //-uq
        "MTMGDSE01T-2022.pdf",  //-uq
        "MTMGDSE01T-supple-2021.pdf",  //-uq
        "MTMGDSE02T-2021.pdf",  //-uq
        "MTMGDSE02T-2022.pdf",  //-uq
        "MTMGDSE03T-2021.pdf",  //-uq
        "MTMGDSE03T-2022.pdf",  //-uq
        "MTMGDSE04T-2021.pdf",  //-uq
        "MTMGDSE04T-2022.pdf",  //-uq

    ],

    "MUCA": [

        "MUCACOR01T-2022.pdf",  //-uq
        "MUCACOR02T-2022.pdf",  //-uq
        "MUCACOR03T-2021.pdf",  //-uq
        "MUCACOR03T-2022.pdf",  //-uq
        "MUCACOR04T-2021.pdf",  //-uq
        "MUCACOR04T-2022.pdf",  //-uq
        "MUCACOR05T-2022.pdf",  //-uq
        "MUCACOR06T-2022.pdf",  //-uq
        "MUCACOR07T-2022.pdf",  //-uq
        "MUCACOR08T-2022.pdf",  //-uq
        "MUCACOR09T-2022.pdf",  //-uq
        "MUCACOR10T-2021.pdf",  //-uq
        "MUCACOR10T-2022.pdf",  //-uq
        "MUCACOR11T-2022.pdf",  //-uq
        "MUCACOR12T-2022.pdf",  //-uq
        "MUCACOR13T-2021.pdf",  //-uq
        "MUCACOR13T-2022.pdf",  //-uq
        "MUCACOR14T-2021.pdf",  //-uq
        "MUCACOR14T-2022.pdf",  //-uq

        "MUCADSE02T-2022.pdf",  //-uq
        "MUCADSE03T-2022.pdf",  //-uq
        "MUCADSE05T-2021.pdf",  //-uq
        "MUCADSE05T-2022.pdf",  //-uq
        "MUCADSE06T-2021.pdf",  //-uq
        "MUCADSE06T-2022.pdf",  //-uq

    ],

    "MUCG": [

        "MUCGCOR01T-2022.pdf",  //-uq
        "MUCGCOR02T-2021.pdf",  //-uq
        "MUCGCOR02T-2022.pdf",  //-uq
        "MUCGCOR03T-2022.pdf",  //-uq
        "MUCGCOR04T-2021.pdf",  //-uq
        "MUCGCOR04T-2022.pdf",  //-uq

        "MUCGDSE01T-2022.pdf",  //-uq
        "MUCGDSE03T-2021.pdf",  //-uq
        "MUCGDSE03T-2022.pdf",  //-uq
        "MUCGDSE04T-2021.pdf",  //-uq
        "MUCGDSE04T-2022.pdf",  //-uq
        "MUCGGEC01T-2022.pdf",  //-uq
        "MUCGGEC02T-2021.pdf",  //-uq
        "MUCGGEC02T-2022.pdf",  //-uq

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
        "PEDG-4A-2022.pdf",  //-hq
        "PEDG-4A-supple-2021.pdf",  //-uq
        "PEDGDSE02T-2022.pdf",  //-uq
        "PEDGDSE03T-2021.pdf",  //-uq
        "PEDGGEC01T-2022.pdf",  //-uq

        "PEDGCOR01T-2021.pdf",  //-uq
        "PEDGCOR01T-2022.pdf",  //-uq
        "PEDGCOR01T-supple-2021.pdf",  //-uq
        "PEDGCOR01T-twin-2022.pdf",  //-uq
        "PEDGCOR02T-2021.pdf",  //-uq
        "PEDGCOR02T-2022.pdf",  //-uq
        "PEDGCOR03T-2021.pdf",  //-uq
        "PEDGCOR03T-2022.pdf",  //-uq
        "PEDGCOR03T-supple-2021.pdf",  //-uq
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

        "PHIACOR01T-2022.pdf",  //-uq
        "PHIACOR01T-supple-2021.pdf",  //-uq
        "PHIACOR02T-2022.pdf",  //-uq
        "PHIACOR02T-supple-2021.pdf",  //-uq
        "PHIACOR03T-2021.pdf",  //-uq
        "PHIACOR03T-2022.pdf",  //-uq
        "PHIACOR03T-supple-2021.pdf",  //-uq
        "PHIACOR04T-2021.pdf",  //-uq
        "PHIACOR04T-2022.pdf",  //-uq
        "PHIACOR04T-supple-2021.pdf",  //-uq
        "PHIACOR05T-2021.pdf",  //-uq
        "PHIACOR05T-2022.pdf",  //-uq
        "PHIACOR06T-2022.pdf",  //-uq
        "PHIACOR06T-supple-2021.pdf",  //-uq
        "PHIACOR07T-2022.pdf",  //-uq
        "PHIACOR07T-supple-2021.pdf",  //-uq
        "PHIACOR08T-2022.pdf",  //-uq
        "PHIACOR08T-supple-2021.pdf",  //-uq
        "PHIACOR09T-2022.pdf",  //-uq
        "PHIACOR09T-supple-2021.pdf",  //-uq
        "PHIACOR10T-2021.pdf",  //-uq
        "PHIACOR10T-2022.pdf",  //-uq
        "PHIACOR10T-supple-2021.pdf",  //-uq
        "PHIACOR11T-2022.pdf",  //-uq
        "PHIACOR12T-2022.pdf",  //-uq
        "PHIACOR12T-supple-2021.pdf",  //-uq
        "PHIACOR13T-2021.pdf",  //-uq
        "PHIACOR13T-2022.pdf",  //-uq
        "PHIACOR14T-2021.pdf",  //-uq
        "PHIACOR14T-2022.pdf",  //-uq

        "PHIADSE01T-2022.pdf",  //-uq
        "PHIADSE02T-2022.pdf",  //-uq
        "PHIADSE03T-2022.pdf",  //-uq
        "PHIADSE03T-supple-2021.pdf",  //-uq
        "PHIADSE04T-2021.pdf",  //-uq
        "PHIADSE04T-2022.pdf",  //-uq
        "PHIADSE05T-2021.pdf",  //-uq
        "PHIADSE05T-2022.pdf",  //-uq
        "PHIADSE06T-2021.pdf",  //-uq
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
        "PHIG-4-supple-2021.pdf",  //-uq

        "PHIGCOR01T-2022.pdf",  //-uq
        "PHIGCOR01T-supple-2021.pdf",  //-uq
        "PHIGCOR02T-2021.pdf",  //-uq
        "PHIGCOR02T-2022.pdf",  //-uq
        "PHIGCOR02T-supple-2021.pdf",  //-uq
        "PHIGCOR03T-2021.pdf",  //-uq
        "PHIGCOR03T-2022.pdf",  //-uq
        "PHIGCOR03T-supple-2021.pdf",  //-uq
        "PHIGCOR04T-2021.pdf",  //-uq
        "PHIGCOR04T-2022.pdf",  //-uq
        "PHIGCOR04T-supple-2021.pdf",  //-uq

        "PHIGDSE01T-2021.pdf",  //-uq
        "PHIGDSE01T-2022.pdf",  //-uq
        "PHIGDSE01T-supple-2021.pdf",  //-uq
        "PHIGDSE02T-2021.pdf",  //-uq
        "PHIGDSE02T-2022.pdf",  //-uq
        "PHIGDSE02T-supple-2021.pdf",  //-uq
        "PHIGDSE03T-2021.pdf",  //-uq
        "PHIGDSE03T-2022.pdf",  //-uq
        "PHIGDSE04T-2021.pdf",  //-uq
        "PHIGDSE04T-2022.pdf",  //-uq

        "PHIGGEC01T-2021.pdf",  //-uq
        "PHIGGEC01T-2022.pdf",  //-uq
        "PHIGGEC01T-supple-2021.pdf",  //-uq
        "PHIGGEC02T-2021.pdf",  //-uq
        "PHIGGEC02T-2022.pdf",  //-uq

    ],

    "PHSA": [

        "PHSA-5-2022.pdf",  //-hq
        "PHSA-6-2022.pdf",  //-hq

        "PHSACOR01T-2022.pdf",  //-uq
        "PHSACOR02T-2022.pdf",  //-uq
        "PHSACOR03T-2021.pdf",  //-uq
        "PHSACOR03T-2022.pdf",  //-uq
        "PHSACOR04T-2021.pdf",  //-uq
        "PHSACOR04T-2022.pdf",  //-uq
        "PHSACOR05T-2022.pdf",  //-uq
        "PHSACOR05T-supple-2021.pdf",  //-uq
        "PHSACOR06T-2022.pdf",  //-uq
        "PHSACOR07T-2022.pdf",  //-uq
        "PHSACOR08T-2022.pdf",  //-uq
        "PHSACOR09T-2022.pdf",  //-uq
        "PHSACOR10T-2021.pdf",  //-uq
        "PHSACOR10T-2022.pdf",  //-uq
        "PHSACOR11T-2022.pdf",  //-uq
        "PHSACOR11T-2023.pdf",  //-lq
        "PHSACOR12T-2022.pdf",  //-uq
        "PHSACOR12T-2023.pdf",  //-lq
        "PHSACOR13T-2021.pdf",  //-uq
        "PHSACOR13T-2022.pdf",  //-uq
        "PHSACOR14T-2021.pdf",  //-uq
        "PHSACOR14T-2022.pdf",  //-uq

        "PHSADSE01T-2022.pdf",  //-uq
        "PHSADSE02T-2022.pdf",  //-uq
        "PHSADSE02T-2023.pdf",  //-lq
        "PHSADSE03T-2022.pdf",  //-uq
        "PHSADSE03T-2023.pdf",  //-lq
        "PHSADSE04T-2021.pdf",  //-uq
        "PHSADSE04T-2022.pdf",  //-uq
        "PHSADSE05T-2021.pdf",  //-uq
        "PHSADSE05T-2022.pdf",  //-uq
        "PHSADSE06T-2021.pdf",  //-uq
        "PHSADSE06T-2022.pdf",  //-uq

    ],

    "PHSG": [

        "PHSG-1-supple-2021.pdf",  //-uq
        "PHSG-4A-2022.pdf",  //-hq
        "PHSG-4A-supple-2021.pdf",  //-uq

        "PHSGCOR01T-2021.pdf",  //-uq
        "PHSGCOR01T-2022.pdf",  //-uq
        "PHSGCOR02T-2021.pdf",  //-uq
        "PHSGCOR02T-2022.pdf",  //-uq
        "PHSGCOR03T-2021.pdf",  //-uq
        "PHSGCOR03T-2022.pdf",  //-uq
        "PHSGCOR04T-2021.pdf",  //-uq
        "PHSGCOR04T-2022.pdf",  //-uq

        "PHSGDSE01T-2021.pdf",  //-uq
        "PHSGDSE01T-2022.pdf",  //-uq
        "PHSGDSE02T-2021.pdf",  //-uq
        "PHSGDSE02T-2022.pdf",  //-uq
        "PHSGDSE03T-2021.pdf",  //-uq
        "PHSGDSE03T-2022.pdf",  //-uq
        "PHSGDSE04T-2021.pdf",  //-uq
        "PHSGDSE04T-2022.pdf",  //-uq

    ],

    "PHYA": [

        "PHYACOR01T-2022.pdf",  //-uq
        "PHYACOR02T-2022.pdf",  //-uq
        "PHYACOR03T-2021.pdf",  //-uq
        "PHYACOR03T-2022.pdf",  //-uq
        "PHYACOR04T-2021.pdf",  //-uq
        "PHYACOR04T-2022.pdf",  //-uq
        "PHYACOR05T-2022.pdf",  //-uq
        "PHYACOR06T-2022.pdf",  //-uq
        "PHYACOR07T-2022.pdf",  //-uq
        "PHYACOR08T-2022.pdf",  //-uq
        "PHYACOR09T-2022.pdf",  //-uq
        "PHYACOR10T-2021.pdf",  //-uq
        "PHYACOR10T-2022.pdf",  //-uq
        "PHYACOR11T-2022.pdf",  //-uq
        "PHYACOR12T-2022.pdf",  //-uq
        "PHYACOR13T-2021.pdf",  //-uq
        "PHYACOR13T-2022.pdf",  //-uq
        "PHYACOR14T-2021.pdf",  //-uq
        "PHYACOR14T-2022.pdf",  //-uq

        "PHYADSE01T-2022.pdf",  //-uq
        "PHYADSE02T-2022.pdf",  //-uq
        "PHYADSE04T-2021.pdf",  //-uq
        "PHYADSE04T-2022.pdf",  //-uq
        "PHYADSE05T-2021.pdf",  //-uq
        "PHYADSE05T-2022.pdf",  //-uq

    ],

    "PHYG": [

        "PHYG-4A-2022.pdf",  //-hq

        "PHYGCOR01T-2022.pdf",  //-uq
        "PHYGCOR02T-2021.pdf",  //-uq
        "PHYGCOR02T-2022.pdf",  //-uq
        "PHYGCOR03T-2022.pdf",  //-uq
        "PHYGCOR04T-2021.pdf",  //-uq
        "PHYGCOR04T-2022.pdf",  //-uq

        "PHYGDSE02T-2022.pdf",  //-uq
        "PHYGDSE03T-2021.pdf",  //-uq
        "PHYGDSE03T-2022.pdf",  //-uq

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
        "PLSACOR01T-2022.pdf",  //-uq
        "PLSACOR01T-supple-2021.pdf",  //-uq
        "PLSACOR02T-2021.pdf",  //-uq
        "PLSACOR02T-2022.pdf",  //-uq
        "PLSACOR02T-supple-2021.pdf",  //-uq
        "PLSACOR03T-2021.pdf",  //-uq
        "PLSACOR03T-2022.pdf",  //-uq
        "PLSACOR03T-supple-2021.pdf",  //-uq
        "PLSACOR04T-2021.pdf",  //-uq
        "PLSACOR04T-2022.pdf",  //-uq
        "PLSACOR04T-supple-2021.pdf",  //-uq
        "PLSACOR05T-2021.pdf",  //-uq
        "PLSACOR05T-2022.pdf",  //-uq
        "PLSACOR05T-supple-2021.pdf",  //-uq
        "PLSACOR06T-2022.pdf",  //-uq
        "PLSACOR06T-supple-2021.pdf",  //-uq
        "PLSACOR07T-2021.pdf",  //-uq
        "PLSACOR07T-2022.pdf",  //-uq
        "PLSACOR07T-supple-2021.pdf",  //-uq
        "PLSACOR08T-2021.pdf",  //-uq
        "PLSACOR08T-2022.pdf",  //-uq
        "PLSACOR08T-supple-2021.pdf",  //-uq
        "PLSACOR09T-2021.pdf",  //-uq
        "PLSACOR09T-2022.pdf",  //-uq
        "PLSACOR09T-supple-2021.pdf",  //-uq
        "PLSACOR10T-2021.pdf",  //-uq
        "PLSACOR10T-2022.pdf",  //-uq
        "PLSACOR11T-2022.pdf",  //-uq
        "PLSACOR12T-2022.pdf",  //-uq
        "PLSACOR12T-supple-2021.pdf",  //-uq
        "PLSACOR13T-2021.pdf",  //-uq
        "PLSACOR13T-2022.pdf",  //-uq
        "PLSACOR14T-2021.pdf",  //-uq
        "PLSACOR14T-2022.pdf",  //-uq


        "PLSADSE01T-2021.pdf",  //-uq
        "PLSADSE01T-2022.pdf",  //-uq
        "PLSADSE02T-2021.pdf",  //-uq
        "PLSADSE02T-2022.pdf",  //-uq
        "PLSADSE03T-2021.pdf",  //-uq
        "PLSADSE03T-2022.pdf",  //-uq
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
        "PLSGCOR01T-supple-2021.pdf",  //-uq
        "PLSGCOR02T-2021.pdf",  //-uq
        "PLSGCOR02T-2022.pdf",  //-uq
        "PLSGCOR02T-supple-2021.pdf",  //-uq
        "PLSGCOR03T-2021.pdf",  //-uq
        "PLSGCOR03T-2022.pdf",  //-uq
        "PLSGCOR03T-supple-2021.pdf",  //-uq
        "PLSGCOR04T-2021.pdf",  //-uq
        "PLSGCOR04T-2022.pdf",  //-uq
        "PLSGCOR04T-supple-2021.pdf",  //-uq

        "PLSGDSE01T-2021.pdf",  //-uq
        "PLSGDSE01T-2022.pdf",  //-uq
        "PLSGDSE01T-supple-2021.pdf",  //-uq
        "PLSGDSE02T-2021.pdf",  //-uq
        "PLSGDSE02T-2022.pdf",  //-uq
        "PLSGDSE02T-supple-2021.pdf",  //-uq
        "PLSGDSE03T-2021.pdf",  //-uq
        "PLSGDSE03T-2022.pdf",  //-uq
        "PLSGDSE04T-2021.pdf",  //-uq
        "PLSGDSE04T-2022.pdf",  //-uq

        "PLSGGEC01T-2021.pdf",  //-uq
        "PLSGGEC01T-2022.pdf",  //-uq
        "PLSGGEC01T-supple-2021.pdf",  //-uq
        "PLSGGEC02T-2021.pdf",  //-uq
        "PLSGGEC02T-2022.pdf",  //-uq

    ],

    "PSYA": [

        "PSYACOR01T-2022.pdf",  //-uq
        "PSYACOR02T-2022.pdf",  //-uq
        "PSYACOR03T-2021.pdf",  //-uq
        "PSYACOR03T-2022.pdf",  //-uq
        "PSYACOR04T-2021.pdf",  //-uq
        "PSYACOR04T-2022.pdf",  //-uq
        "PSYACOR05T-2022.pdf",  //-uq
        "PSYACOR06T-2022.pdf",  //-uq
        "PSYACOR07T-2022.pdf",  //-uq
        "PSYACOR07T-supple-2021.pdf",  //-uq
        "PSYACOR08T-2022.pdf",  //-uq
        "PSYACOR09T-2022.pdf",  //-uq
        "PSYACOR10T-2021.pdf",  //-uq
        "PSYACOR10T-2022.pdf",  //-uq
        "PSYACOR11T-2022.pdf",  //-uq
        "PSYACOR12T-2022.pdf",  //-uq
        "PSYACOR13T-2021.pdf",  //-uq
        "PSYACOR13T-2022.pdf",  //-uq
        "PSYACOR14T-2021.pdf",  //-uq
        "PSYACOR14T-2022.pdf",  //-uq

        "PSYADSE01T-2022.pdf",  //-uq
        "PSYADSE02T-2022.pdf",  //-uq
        "PSYADSE04T-2021.pdf",  //-uq
        "PSYADSE04T-2022.pdf",  //-uq
        "PSYADSE05T-2021.pdf",  //-uq
        "PSYADSE05T-2022.pdf",  //-uq

    ],

    "PSYG": [

        "PSYGCOR01T-2022.pdf",  //-uq
        "PSYGCOR02T-2021.pdf",  //-uq
        "PSYGCOR02T-2022.pdf",  //-uq
        "PSYGCOR03T-2022.pdf",  //-uq
        "PSYGCOR03T-supple-2021.pdf",  //-uq
        "PSYGCOR04T-2021.pdf",  //-uq
        "PSYGCOR04T-2022.pdf",  //-uq

        "PSYGDSE01T-2022.pdf",  //-uq
        "PSYGDSE01T-supple-2021.pdf",  //-uq
        "PSYGDSE04T-2021.pdf",  //-uq
        "PSYGDSE04T-2022.pdf",  //-uq

        "PSYGGEC01T-2022.pdf",  //-uq
        "PSYGGEC02T-2021.pdf",  //-uq

    ],

    "SANA": [

        "SANA-5-2022.pdf",  //-hq
        "SANA-6-2022.pdf",  //-hq
        "SANA-8-2022.pdf",  //-hq

        "SANACOR01T-2022.pdf",  //-uq
        "SANACOR02T-2022.pdf",  //-uq
        "SANACOR03T-2021.pdf",  //-uq
        "SANACOR03T-2022.pdf",  //-uq
        "SANACOR04T-2021.pdf",  //-uq
        "SANACOR04T-2022.pdf",  //-uq
        "SANACOR05T-2022.pdf",  //-uq
        "SANACOR06T-2022.pdf",  //-uq
        "SANACOR07T-2022.pdf",  //-uq
        "SANACOR08T-2022.pdf",  //-uq
        "SANACOR09T-2022.pdf",  //-uq
        "SANACOR10T-2021.pdf",  //-uq
        "SANACOR10T-2022.pdf",  //-uq
        "SANACOR11T-2022.pdf",  //-uq
        "SANACOR12T-2022.pdf",  //-uq
        "SANACOR13T-2021.pdf",  //-uq
        "SANACOR13T-2022.pdf",  //-uq
        "SANACOR14T-2021.pdf",  //-uq
        "SANACOR14T-2022.pdf",  //-uq

        "SANADSE01T-2022.pdf",  //-uq
        "SANADSE02T-2022.pdf",  //-uq
        "SANADSE03T-2022.pdf",  //-uq
        "SANADSE04T-2021.pdf",  //-uq
        "SANADSE04T-2022.pdf",  //-uq
        "SANADSE05T-2021.pdf",  //-uq
        "SANADSE05T-2022.pdf",  //-uq
        "SANADSE06T-2021.pdf",  //-uq
        "SANADSE06T-2022.pdf",  //-uq

    ],

    "SANG": [

        "SANG-1-2014.pdf",  //-hq
        "SANG-1-2016.pdf",  //-hq
        "SANG-1-2017.pdf",  //-mq
        "SANG-1-supple-2021.pdf",  //-uq
        "SANG-2-2014.pdf",  //-hq
        "SANG-2-2016.pdf",  //-hq
        "SANG-2-2017.pdf",  //-mq
        "SANG-2-2018.pdf",  //-mq
        "SANG-4-2014.pdf",  //-hq
        "SANG-4-2016.pdf",  //-hq
        "SANG-4-2017.pdf",  //-mq
        "SANG-4-2018.pdf",  //-mq
        "SANG-4-2022.pdf",  //-hq

        "SANGCOR01T-2021.pdf",  //-uq
        "SANGCOR01T-2022.pdf",  //-uq
        "SANGCOR01T-supple-2021.pdf",  //-uq
        "SANGCOR02T-2021.pdf",  //-uq
        "SANGCOR02T-2022.pdf",  //-uq
        "SANGCOR03T-2021.pdf",  //-uq
        "SANGCOR03T-2022.pdf",  //-uq
        "SANGCOR03T-supple-2021.pdf",  //-uq
        "SANGCOR04T-2021.pdf",  //-uq
        "SANGCOR04T-2022.pdf",  //-uq
        "SANGCOR04T-supple-2021.pdf",  //-uq

        "SANGDSE01T-2021.pdf",  //-uq
        "SANGDSE01T-2022.pdf",  //-uq
        "SANGDSE01T-supple-2021.pdf",  //-uq
        "SANGDSE02T-2021.pdf",  //-uq
        "SANGDSE02T-2022.pdf",  //-uq
        "SANGDSE03T-2021.pdf",  //-uq
        "SANGDSE03T-2022.pdf",  //-uq
        "SANGDSE04T-2021.pdf",  //-uq
        "SANGDSE04T-2022.pdf",  //-uq

        "SANGGEC01T-2021.pdf",  //-uq
        "SANGGEC01T-2022.pdf",  //-uq
        "SANGGEC01T-supple-2021.pdf",  //-uq
        "SANGGEC02T-2021.pdf",  //-uq
        "SANGGEC02T-2022.pdf",  //-uq

        "SANLCOR01T-2021.pdf",  //-uq
        "SANLCOR01T-2022.pdf",  //-uq
        "SANLCOR01T-supple-2021.pdf",  //-uq
        "SANLCOR02T-2021.pdf",  //-uq
        "SANLCOR02T-2022.pdf",  //-uq

        "SANSAEC01M-2021.pdf",  //-uq
        "SANSAEC01M-2022.pdf",  //-uq

    ],

    "SOCA": [

        "SOCA-5-2022.pdf",  //-hq
        "SOCA-6-2022.pdf",  //-hq

        "SOCACOR01T-2022.pdf",  //-uq
        "SOCACOR02T-2022.pdf",  //-uq
        "SOCACOR03T-2021.pdf",  //-uq
        "SOCACOR03T-2022.pdf",  //-uq
        "SOCACOR04T-2021.pdf",  //-uq
        "SOCACOR04T-2022.pdf",  //-uq
        "SOCACOR05T-2022.pdf",  //-uq
        "SOCACOR05T-supple-2021.pdf",  //-uq
        "SOCACOR06T-2022.pdf",  //-uq
        "SOCACOR07T-2022.pdf",  //-uq
        "SOCACOR07T-supple-2021.pdf",  //-uq
        "SOCACOR08T-2022.pdf",  //-uq
        "SOCACOR09T-2022.pdf",  //-uq
        "SOCACOR09T-supple-2021.pdf",  //-uq
        "SOCACOR10T-2021.pdf",  //-uq
        "SOCACOR10T-2022.pdf",  //-uq
        "SOCACOR11T-2022.pdf",  //-uq
        "SOCACOR12T-2022.pdf",  //-uq
        "SOCACOR13T-2021.pdf",  //-uq
        "SOCACOR13T-2022.pdf",  //-uq
        "SOCACOR14T-2021.pdf",  //-uq
        "SOCACOR14T-2022.pdf",  //-uq

        "SOCADSE01T-2022.pdf",  //-uq
        "SOCADSE01T-supple-2021.pdf",  //-uq
        "SOCADSE02T-2022.pdf",  //-uq
        "SOCADSE04T-2021.pdf",  //-uq
        "SOCADSE04T-2022.pdf",  //-uq
        "SOCADSE06T-2021.pdf",  //-uq
        "SOCADSE06T-2022.pdf",  //-uq

    ],

    "SOCG": [

        "SOCGCOR01T-2022.pdf",  //-uq
        "SOCGCOR02T-2021.pdf",  //-uq
        "SOCGCOR02T-2022.pdf",  //-uq
        "SOCGCOR03T-2022.pdf",  //-uq
        "SOCGCOR03T-supple-2021.pdf",  //-uq
        "SOCGCOR04T-2021.pdf",  //-uq
        "SOCGCOR04T-2022.pdf",  //-uq
        "SOCGCOR04T-supple-2021.pdf",  //-uq

        "SOCGDSE01T-2022.pdf",  //-uq
        "SOCGDSE02T-2022.pdf",  //-uq
        "SOCGDSE03T-2021.pdf",  //-uq
        "SOCGDSE03T-2022.pdf",  //-uq
        "SOCGDSE04T-2021.pdf",  //-uq
        "SOCGDSE04T-2022.pdf",  //-uq

        "SOCGGEC01T-2022.pdf",  //-uq
        "SOCGGEC01T-supple-2021.pdf",  //-uq
        "SOCGGEC02T-2021.pdf",  //-uq
        "SOCGGEC02T-2022.pdf",  //-uq

    ],

    "STSA": [

        "STSACOR01T-2022.pdf",  //uq
        "STSACOR02T-2022.pdf",  //uq
        "STSACOR03T-2021.pdf",  //uq
        "STSACOR03T-2022.pdf",  //uq
        "STSACOR04T-2021.pdf",  //uq
        "STSACOR04T-2022.pdf",  //uq
        "STSACOR05T-2022.pdf",  //uq
        "STSACOR06T-2022.pdf",  //uq
        "STSACOR07T-2022.pdf",  //uq
        "STSACOR08T-2022.pdf",  //uq
        "STSACOR09T-2022.pdf",  //uq
        "STSACOR10T-2021.pdf",  //uq
        "STSACOR10T-2022.pdf",  //uq
        "STSACOR11T-2022.pdf",  //uq
        "STSACOR12T-2022.pdf",  //uq
        "STSACOR13T-2021.pdf",  //uq
        "STSACOR13T-2022.pdf",  //uq
        "STSACOR14T-2021.pdf",  //uq
        "STSACOR14T-2022.pdf",  //uq

        "STSADSE01T-2022.pdf",  //uq
        "STSADSE02T-2022.pdf",  //uq
        "STSADSE03T-2022.pdf",  //uq
        "STSADSE04T-2021.pdf",  //uq
        "STSADSE04T-2022.pdf",  //uq
        "STSADSE05T-2021.pdf",  //uq
        "STSADSE05T-2022.pdf",  //uq

    ],

    "STSG": [

        "STSGCOR01T-2022.pdf",  //-uq
        "STSGCOR02T-2021.pdf",  //-uq
        "STSGCOR02T-2022.pdf",  //-uq
        "STSGCOR03T-2022.pdf",  //-uq
        "STSGCOR04T-2021.pdf",  //-uq
        "STSGCOR04T-2022.pdf",  //-uq

        "STSGDSE01T-2022.pdf",  //-uq
        "STSGDSE03T-2021.pdf",  //-uq
        "STSGDSE03T-2022.pdf",  //-uq

    ],

    "URDA": [

        "URDA-5-2022.pdf",  //-hq

        "URDACOR01T-2022.pdf",  //-uq
        "URDACOR02T-2022.pdf",  //-uq
        "URDACOR03T-2021.pdf",  //-uq
        "URDACOR03T-2022.pdf",  //-uq
        "URDACOR04T-2021.pdf",  //-uq
        "URDACOR04T-2022.pdf",  //-uq
        "URDACOR05T-2022.pdf",  //-uq
        "URDACOR06T-2022.pdf",  //-uq
        "URDACOR07T-2022.pdf",  //-uq
        "URDACOR08T-2022.pdf",  //-uq
        "URDACOR09T-2022.pdf",  //-uq
        "URDACOR10T-2021.pdf",  //-uq
        "URDACOR10T-2022.pdf",  //-uq
        "URDACOR11T-2022.pdf",  //-uq
        "URDACOR12T-2022.pdf",  //-uq
        "URDACOR13T-2021.pdf",  //-uq
        "URDACOR13T-2022.pdf",  //-uq
        "URDACOR14T-2021.pdf",  //-uq
        "URDACOR14T-2022.pdf",  //-uq

        "URDADSE01T-2022.pdf",  //-uq
        "URDADSE02T-2022.pdf",  //-uq
        "URDADSE03T-2022.pdf",  //-uq
        "URDADSE05T-2021.pdf",  //-uq
        "URDADSE05T-2022.pdf",  //-uq
        "URDADSE06T-2021.pdf",  //-uq
        "URDADSE06T-2022.pdf",  //-uq

    ],

    "URDG": [

        "URDG-4-2022.pdf",  //-hq

        "URDGCOR01T-2022.pdf",  //-uq
        "URDGCOR02T-2021.pdf",  //-uq
        "URDGCOR02T-2022.pdf",  //-uq
        "URDGCOR03T-2022.pdf",  //-uq
        "URDGCOR03T-supple-2021.pdf",  //-uq
        "URDGCOR04T-2021.pdf",  //-uq
        "URDGCOR04T-2022.pdf",  //-uq

        "URDGDSE01T-2022.pdf",  //-uq
        "URDGDSE03T-2021.pdf",  //-uq
        "URDGDSE03T-2022.pdf",  //-uq
        "URDGDSE04T-2021.pdf",  //-uq
        "URDGDSE04T-2022.pdf",  //-uq

        "URDGGEC01T-2022.pdf",  //-uq
        "URDGGEC02T-2021.pdf",  //-uq
        "URDGGEC02T-2022.pdf",  //-uq

        "URDLCOR01T-2022.pdf",  //-uq
        "URDLCOR02T-2021.pdf",  //-uq
        "URDLCOR02T-2022.pdf",  //-uq

        "URDSAEC01M-2022.pdf",  //-uq

    ],

    "WMSG": [

        "WMSGCOR01T-2022.pdf",  //-uq
        "WMSGCOR02T-2022.pdf",  //-uq
        "WMSGCOR03T-2022.pdf",  //-uq
        "WMSGCOR04T-2021.pdf",  //-uq
        "WMSGCOR04T-2022.pdf",  //-uq

        "WMSGGEC01T-2022.pdf",  //-uq
        "WMSGGEC02T-2021.pdf",  //-uq
        "WMSGGEC02T-2022.pdf",  //-uq

    ],

    "ZOOA": [

        "ZOOA-8-2022.pdf",  //-hq

        "ZOOACOR01T-2022.pdf",  //-uq
        "ZOOACOR02T-2022.pdf",  //-uq
        "ZOOACOR03T-2021.pdf",  //-uq
        "ZOOACOR03T-2022.pdf",  //-uq
        "ZOOACOR04T-2021.pdf",  //-uq
        "ZOOACOR04T-2022.pdf",  //-uq
        "ZOOACOR05T-2022.pdf",  //-uq
        "ZOOACOR06T-2022.pdf",  //-uq
        "ZOOACOR07T-2022.pdf",  //-uq
        "ZOOACOR08T-2022.pdf",  //-uq
        "ZOOACOR09T-2022.pdf",  //-uq
        "ZOOACOR09T-supple-2021.pdf",  //-uq
        "ZOOACOR10T-2021.pdf",  //-uq
        "ZOOACOR10T-2022.pdf",  //-uq
        "ZOOACOR10T-supple-2021.pdf",  //-uq
        "ZOOACOR11T-2022.pdf",  //-uq
        "ZOOACOR12T-2022.pdf",  //-uq
        "ZOOACOR13T-2021.pdf",  //-uq
        "ZOOACOR13T-2022.pdf",  //-uq
        "ZOOACOR14T-2021.pdf",  //-uq
        "ZOOACOR14T-2022.pdf",  //-uq

        "ZOOADSE01T-2022.pdf",  //-uq
        "ZOOADSE02T-2022.pdf",  //-uq
        "ZOOADSE03T-2022.pdf",  //-uq
        "ZOOADSE04T-2021.pdf",  //-uq
        "ZOOADSE04T-2022.pdf",  //-uq
        "ZOOADSE05T-2021.pdf",  //-uq
        "ZOOADSE05T-2022.pdf",  //-uq
        "ZOOADSE06T-2021.pdf",  //-uq
        "ZOOADSE06T-2022.pdf",  //-uq

    ],

    "ZOOG": [

        "ZOOG-1-supple-2021.pdf",  //-uq
        "ZOOG-4A-2022.pdf",  //-hq
        "ZOOG-4A-supple-2021.pdf",  //-uq

        "ZOOGCOR01T-2022.pdf",  //-uq
        "ZOOGCOR02T-2022.pdf",  //-uq
        "ZOOGCOR03T-2022.pdf",  //-uq
        "ZOOGCOR04T-2021.pdf",  //-uq
        "ZOOGCOR04T-2022.pdf",  //-uq

        "ZOOGDSE01T-2022.pdf",  //-uq
        "ZOOGDSE03T-2021.pdf",  //-uq
        "ZOOGDSE03T-2022.pdf",  //-uq
        "ZOOGDSE04T-2021.pdf",  //-uq
        "ZOOGDSE04T-2022.pdf",  //-uq

    ],

};

const exam_papers_keys = Object.keys(exam_papers);

const search_exam_papers_specific = async (subject, year) => {
    let results = [];
    exam_papers[subject].forEach(paper => {
        if (year == "ANY" || paper.slice(-8, -4) == year)
            results.push(paper);
    });
    return results;
};

const count_exam_papers = async () => {
    let count = 0;
    exam_papers_keys.forEach(key => count += exam_papers[key].length);
    return count;
};

const search_exam_papers_generic = async (name) => {
    let results = [];
    name = name.toLowerCase();
    exam_papers_keys.forEach(key => exam_papers[key].forEach(paper => {
        if (paper.slice(0, -4).toLowerCase().includes(name)) results.push(key + "/" + paper);
    }));
    return results;
};

document.addEventListener("DOMContentLoaded", () => {

    const search_option_subject = document.getElementById("search-option-subject");
    const search_option_year = document.getElementById("search-option-year");
    const search_btn = document.getElementById("search-btn");
    const search_option_text = document.getElementById("search-option-text");
    const search_toggle_text = document.getElementById("search-toggle-text");
    const search_toggle_select = document.getElementById("search-toggle-select");
    const search_results = document.getElementById("search-results");

    const add_search_options = () => {
        let option;
        const exam_subjects = exam_papers_keys;
        exam_subjects.forEach(subject => {
            option = document.createElement("option");
            option.text = subject;
            option.value = subject;
            search_option_subject.appendChild(option);
        });
        exam_years.reverse().forEach(year => {
            option = document.createElement("option");
            option.text = year;
            option.value = year;
            search_option_year.appendChild(option);
        });
    };

    add_search_options();

    const output_papers_count = async () => {
        const count = await count_exam_papers();
        search_results.innerHTML =
            `<p id="search-results-info">( ${count} papers available )`;
    };

    const toggle_search_type = (text_search) => {
        search_option_subject.parentElement.style.display = text_search ? "none" : "initial";
        search_option_year.parentElement.style.display = text_search ? "none" : "initial";
        search_btn.parentElement.style.display = text_search ? "none" : "initial";
        search_option_text.parentElement.style.display = !text_search ? "none" : "initial";
        search_toggle_text.style.display = text_search ? "none" : "initial";
        search_toggle_select.style.display = !text_search ? "none" : "initial";
        search_option_text.value = "";
        output_papers_count(search_results);
    };

    search_option_text.parentElement.style.width = "400px";
    search_option_text.parentElement.style.maxWidth = "calc(100% - 32px)";
    search_toggle_text.parentElement.style.marginLeft = "auto";
    toggle_search_type(false);

    search_toggle_text.addEventListener("click", () => toggle_search_type(true));
    search_toggle_select.addEventListener("click", () => toggle_search_type(false));

    const output_search_results_specific = async () => {
        const subject = search_option_subject.value;
        const year = search_option_year.value;
        const results = await search_exam_papers_specific(subject, year);
        let search_results_html =
            `<p id="search-results-info">( ${results.length} results found for ${subject} ${year == "ANY" ? "" : year} )</p>
            <div class="search-results-set">`;
        results.forEach(paper => {
            search_results_html +=
                `<div class="item">
                <span>${paper.slice(0, -4)}</span>
                <a href="/download/${exam_dir}/${subject}/${paper}" target="_blank">View Paper</a>
                </div>`;
        });
        search_results_html += `</div>`;
        search_results.innerHTML = search_results_html;
    };

    search_btn.addEventListener("click", () => output_search_results_specific());

    const output_search_results_generic = async () => {
        const name = search_option_text.value;
        if (name.length < 3 || name.length > 16) {
            search_results.innerHTML =
                `<p id="search-results-info">( Input 3 or more characters to search )</p>`;
            return;
        }
        const results = await search_exam_papers_generic(name);
        let search_results_html =
            `<p id="search-results-info">( ${results.length} results found for "${name}" )</p>
            <div class="search-results-set">`;
        results.forEach(paper => {
            search_results_html +=
                `<div class="item">
                <span>${paper.slice(5, -4)}</span>
                <a href="/download/${exam_dir}/${paper}" target="_blank">View Paper</a>
                </div>`;
        });
        search_results_html += `</div>`;
        search_results.innerHTML = search_results_html;
    };

    search_option_text.addEventListener("input", () => output_search_results_generic());

});
