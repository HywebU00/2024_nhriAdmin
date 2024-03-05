export function getCommonArrayTextUtil(type, val) {
    if (!type || !val) {
        return ''
    }
    var obj = this.getCommonArrayUtil(type).find(item => item.value === val)
    if (obj != null)
        return obj.label
    else return ''
};

export function getCommonArrayUtil(val) {
    var array = [];
    switch (val) {
        case ('activeFlag'):
            array = [{
                label: '啟用',
                labelEng: 'Active',
                value: "1"
            }, {
                label: '停用',
                labelEng: 'Inactive',
                value: "0"
            },];
            break;
        case ('yesFlag'):
            array = [{
                label: '是',
                labelEng: 'Yes',
                value: "1"
            }, {
                label: '否',
                labelEng: 'No',
                value: "0"
            },];
            break;
    };


    return JSON.parse(JSON.stringify(array))
}
export function getModel(val) {

    var model = {}
    switch (val) {
        case ('t01'):
            model = [
                {
                    "title": "Nicolas - (0)",
                    "id": "Nicolas",
                    "children": [
                        {
                            "title": "Fay - (1)",
                            "id": "Fay",
                            "children": [
                                {
                                    "title": "Rohan - (2)",
                                    "id": "Rohan",
                                    "children": []
                                },
                                {
                                    "title": "Farrell - (3)",
                                    "id": "Farrell - (3)",
                                    "children": []
                                },
                                {
                                    "title": "Williamson - (4)",
                                    "id": "Williamson - (4)",
                                    "children": []
                                },
                                {
                                    "title": "Sawayn - (5)",
                                    "id": "Sawayn - (5)",
                                    "children": []
                                },
                                {
                                    "title": "Pacocha - (6)",
                                    "id": "Pacocha - (6)",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "title": "Krajcik - (7)",
                            "id": "Krajcik - (7)",
                            "children": [
                                {
                                    "title": "Ruecker - (8)",
                                    "id": "Ruecker - (8)",
                                    "children": []
                                },
                                {
                                    "title": "Romaguera - (9)",
                                    "id": "Romaguera - (9)",
                                    "children": []
                                },
                                {
                                    "title": "Schroeder - (10)",
                                    "id": "Schroeder - (10)",
                                    "children": []
                                },
                                {
                                    "title": "Hodkiewicz - (11)",
                                    "id": "Hodkiewicz - (11)",
                                    "children": []
                                },
                                {
                                    "title": "Botsford - (12)",
                                    "id": "Botsford - (12)",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "title": "Sauer - (13)",
                            "id": "Sauer - (13)",
                            "children": [
                                {
                                    "title": "Macejkovic - (14)",
                                    "id": "Macejkovic - (14)",
                                    "children": []
                                },
                                {
                                    "title": "Shields - (15)",
                                    "id": "Shields - (15)",
                                    "children": []
                                },
                                {
                                    "title": "Ward - (16)",
                                    "id": "Ward - (16)",
                                    "children": []
                                },
                                {
                                    "title": "Paucek - (17)",
                                    "id": "Paucek - (17)",
                                    "children": []
                                },
                                {
                                    "title": "Yost - (18)",
                                    "id": "Yost - (18)",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "title": "Ullrich - (19)",
                            "id": "Ullrich - (19)",
                            "children": [
                                {
                                    "title": "Kertzmann - (20)",
                                    "id": "Kertzmann - (20)",
                                    "children": []
                                },
                                {
                                    "title": "Lind - (21)",
                                    "id": "Lind - (21)",
                                    "children": []
                                },
                                {
                                    "title": "Daugherty - (22)",
                                    "id": "Daugherty - (22)",
                                    "children": []
                                },
                                {
                                    "title": "Franecki - (23)",
                                    "id": "Franecki - (23)",
                                    "children": []
                                },
                                {
                                    "title": "Schuppe - (24)",
                                    "id": "Schuppe - (24)",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "title": "Ferry - (25)",
                            "id": "Ferry - (25)",
                            "children": [
                                {
                                    "title": "Crona - (26)",
                                    "id": "Crona - (26)",
                                    "children": []
                                },
                                {
                                    "title": "Willms - (27)",
                                    "id": "Willms - (27)",
                                    "children": []
                                },
                                {
                                    "title": "Upton - (28)",
                                    "id": "Upton - (28)",
                                    "children": []
                                },
                                {
                                    "title": "Schumm - (29)",
                                    "id": "Schumm - (29)",
                                    "children": []
                                },
                                {
                                    "title": "Will - (30)",
                                    "id": "Will - (30)",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
            ]
            break;

        case ('fakeUnitArray'):
            model = [{ value: '1', title: 'AB動物行為核心設施' }, { value: '1112', title: 'AC會計室' }];
            break;
        case ('fakeAccount'):
            model = {
                "userId": "000101",//"帳號",
                "password": "000101",//"密碼",
                "userName": "范文珠",//"姓名",
                "userType": "1",//"1、EX",
                "jobTitle": "計畫助理",// "職稱",
                "email": "111",//"電子信箱",
                "lastVisit": "",//"上次造訪時間",
                "visitCount": 42,
                "telephone": "222",//"電話",
                "lastIp": "",//"上次造訪ip位址",
                "fax": "",//"傳真",
                "active": 1,
                "dept": {
                    // 如果 Dept 是一個物件，請提供相應的屬性
                },
                "userNameEng": "",//"英文姓名",
                "address": "",//"地址",
                "degree": "",//"學位",
                "sex": 0, // 0 表示性別的某個值
                "birthday": "",//"710924",
                "jobTitleEng": "",//"職稱(英文)",
                "piUserId": "",//"所屬PI",
                "loginByPassword": 0
            }
            break;
        case ('fakeRoleArray'):
            model = [{ value: 1, title: '上級單位主管(所/處)' }, { value: 2, title: '上級單位主管(所/處)(行政)' }, { value: 3, title: '全院計畫查詢人' }, { value: 4, title: '參與計畫人員瀏覽權限' }, { value: 5, title: '單位主管(研究單位)' }, { value: 6, title: '單位主管(行政單位)' }, { value: 7, title: '單位彙整人(查詢全所計畫)' },]
            break;
        case ('fakeDeptArray'):
            model = [

                // {
                //     "uuid": "external_committee",
                //     "depth": "0",
                //     "parentUuid": "",
                //     "name": "外部審查",
                //     "deptId": "EXTERNAL",
                //     "description": "外部審查委員預設單位",
                //     "chief": "hyweb",
                //     "priority": "2",
                //     "status": "1",
                //     "modify_date": "18-7月 -11 05.14.48.736000000 下午",
                //     "modify_by": "hyweb",
                //     "upper_certify": ""
                // },
                {
                    "uuid": "8a8a84d92f66c96f012f7765abc3000d",
                    "depth": "2",
                    "parentUuid": "2",
                    "name": "學術發展處",
                    "deptId": "PD",
                    "description": "",
                    "chief": "890605-1",
                    "priority": "2",
                    "status": "1",
                    "modify_date": "23-8月 -17 02.11.51.868000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a84d93079c04001307a11e7c00001",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "群體健康科學研究所",
                    "deptId": "PH",
                    "description": "",
                    "chief": "860910",
                    "priority": "12",
                    "status": "1",
                    "modify_date": "30-10月-12 04.36.50.807000000 下午",
                    "modify_by": "hyweb",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a84d93079c04001307a1315c10002",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "癌症研究所",
                    "deptId": "CA",
                    "description": "",
                    "chief": "850107",
                    "priority": "2",
                    "status": "1",
                    "modify_date": "01-8月 -13 02.02.36.722000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a84d93079c04001307a1391d60003",
                    "depth": "2",
                    "parentUuid": "2",
                    "name": "技轉及育成中心",
                    "deptId": "TI",
                    "description": "",
                    "chief": "80307",
                    "priority": "3",
                    "status": "1",
                    "modify_date": "12-3月 -19 02.34.05.862000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a89fd2ed7c3f0012ed7c5d8e90001",
                    "depth": "2",
                    "parentUuid": "3",
                    "name": "總辦事處",
                    "deptId": "AD",
                    "description": "",
                    "chief": "070622-2",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "11-5月 -20 10.27.13.851000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "dept_root_id",
                    "depth": "0",
                    "parentUuid": "",
                    "name": "財團法人國家衛生研究院",
                    "deptId": "NHRI",
                    "description": "國家衛生研究院",
                    "chief": "hyweb",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "15-7月 -11 10.52.03.236000000 下午",
                    "modify_by": "hyweb",
                    "upper_certify": ""
                },
                {
                    "uuid": "8a8a846432fafc420132fc7eb24b0002",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "細胞及系統醫學研究所",
                    "deptId": "CS",
                    "description": "",
                    "chief": "960334",
                    "priority": "3",
                    "status": "1",
                    "modify_date": "23-5月 -16 09.56.11.618000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc7f1d590003",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "環境衛生與職業醫學研究組",
                    "deptId": "EO",
                    "description": "",
                    "chief": "970401-1",
                    "priority": "5",
                    "status": "1",
                    "modify_date": "14-5月 -15 09.24.11.192000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973ace10f1013ad8888dc503a2",
                    "depth": "3",
                    "parentUuid": "8a8a84d93079c04001307a11e7c00001",
                    "name": "群體健康科學研究所老年醫學研究組",
                    "deptId": "PH",
                    "description": "",
                    "chief": "900613",
                    "priority": "3",
                    "status": "0",
                    "modify_date": "05-12月-12 09.03.52.293000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc8000860005",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "免疫醫學研究中心",
                    "deptId": "IM",
                    "description": "",
                    "chief": "960810",
                    "priority": "6",
                    "status": "1",
                    "modify_date": "30-10月-12 04.31.10.454000000 下午",
                    "modify_by": "hyweb",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc80d6830006",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "感染症與疫苗研究所",
                    "deptId": "IV",
                    "description": "",
                    "chief": "80807",
                    "priority": "7",
                    "status": "1",
                    "modify_date": "13-8月 -19 03.39.10.066000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc81302c0007",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "醫學工程研究組",
                    "deptId": "ME",
                    "description": "",
                    "chief": "101",
                    "priority": "8",
                    "status": "0",
                    "modify_date": "01-3月 -18 05.17.46.693000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc818dec0008",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "分子與基因醫學研究所",
                    "deptId": "MG",
                    "description": "",
                    "chief": "61008",
                    "priority": "9",
                    "status": "1",
                    "modify_date": "05-10月-17 03.49.20.843000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc81e4b70009",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "奈米醫學研究中心",
                    "deptId": "NM",
                    "description": "",
                    "chief": "101",
                    "priority": "10",
                    "status": "0",
                    "modify_date": "01-3月 -18 05.17.35.846000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "2c90829732fc6dd80132fc7a9c200001",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "生技與藥物研究所",
                    "deptId": "BP",
                    "description": "",
                    "chief": "880802",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "12-9月 -17 11.28.46.959000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc87c904000b",
                    "depth": "2",
                    "parentUuid": "2",
                    "name": "實驗動物中心",
                    "deptId": "LA",
                    "description": "",
                    "chief": "000321-1",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "08-1月 -20 03.10.33.244000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc98da180015",
                    "depth": "2",
                    "parentUuid": "4",
                    "name": "核心儀器設施中心",
                    "deptId": "CI",
                    "description": "",
                    "chief": "970616-1",
                    "priority": "2",
                    "status": "1",
                    "modify_date": "16-3月 -16 08.40.05.719000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc99b3a00017",
                    "depth": "2",
                    "parentUuid": "4",
                    "name": "基因轉殖鼠核心實驗室",
                    "deptId": "TM",
                    "description": "",
                    "chief": "960810-1",
                    "priority": "5",
                    "status": "1",
                    "modify_date": "06-12月-12 06.49.19.087000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc8a8ebb000e",
                    "depth": "3",
                    "parentUuid": "8a8a89fd2ed7c3f0012ed7c5d8e90001",
                    "name": "會計室",
                    "deptId": "AC",
                    "description": "",
                    "chief": "850203",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "30-10月-12 04.39.53.806000000 下午",
                    "modify_by": "hyweb",
                    "upper_certify": "1"
                },
                {
                    "uuid": "8a8a846432fafc420132fc8af267000f",
                    "depth": "3",
                    "parentUuid": "8a8a89fd2ed7c3f0012ed7c5d8e90001",
                    "name": "總務室",
                    "deptId": "AG",
                    "description": "",
                    "chief": "070622-1",
                    "priority": "2",
                    "status": "1",
                    "modify_date": "02-10月-18 10.24.19.362000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "1"
                },
                {
                    "uuid": "8a8a846432fafc420132fc8b3d7a0010",
                    "depth": "3",
                    "parentUuid": "8a8a89fd2ed7c3f0012ed7c5d8e90001",
                    "name": "人事室",
                    "deptId": "AP",
                    "description": "",
                    "chief": "890609",
                    "priority": "3",
                    "status": "1",
                    "modify_date": "27-2月 -19 11.51.00.076000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "1"
                },
                {
                    "uuid": "8a8a846432fafc420132fc8babd40011",
                    "depth": "3",
                    "parentUuid": "8a8a89fd2ed7c3f0012ed7c5d8e90001",
                    "name": "營繕設管中心",
                    "deptId": "CM",
                    "description": "",
                    "chief": "70622",
                    "priority": "4",
                    "status": "1",
                    "modify_date": "05-7月 -18 02.09.15.682000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "1"
                },
                {
                    "uuid": "8a8a846432fafc420132fc8c29700012",
                    "depth": "3",
                    "parentUuid": "8a8a89fd2ed7c3f0012ed7c5d8e90001",
                    "name": "採購中心",
                    "deptId": "PC",
                    "description": "",
                    "chief": "850147",
                    "priority": "5",
                    "status": "1",
                    "modify_date": "27-2月 -19 11.57.09.256000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "1"
                },
                {
                    "uuid": "8a8a846432fafc420132fc8c89050013",
                    "depth": "3",
                    "parentUuid": "8a8a89fd2ed7c3f0012ed7c5d8e90001",
                    "name": "資訊中心",
                    "deptId": "RC",
                    "description": "",
                    "chief": "70823",
                    "priority": "6",
                    "status": "1",
                    "modify_date": "02-1月 -19 09.39.25.200000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "1"
                },
                {
                    "uuid": "8a8a846432fafc420132fc8cf1340014",
                    "depth": "3",
                    "parentUuid": "8a8a89fd2ed7c3f0012ed7c5d8e90001",
                    "name": "圖書館",
                    "deptId": "RL",
                    "description": "",
                    "chief": "901101-1",
                    "priority": "7",
                    "status": "1",
                    "modify_date": "08-5月 -17 09.54.05.359000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "1"
                },
                {
                    "uuid": "8a8a846432fafc420132fc996fd00016",
                    "depth": "2",
                    "parentUuid": "4",
                    "name": "生醫資源中心",
                    "deptId": "RP",
                    "description": "",
                    "chief": "891107-1",
                    "priority": "4",
                    "status": "1",
                    "modify_date": "02-4月 -18 08.46.28.747000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc9a19bc0018",
                    "depth": "2",
                    "parentUuid": "5",
                    "name": "秘書室",
                    "deptId": "AS",
                    "description": "",
                    "chief": "880605",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "05-6月 -18 02.40.43.014000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc9a6fcb0019",
                    "depth": "2",
                    "parentUuid": "5",
                    "name": "稽核室",
                    "deptId": "AU",
                    "description": "",
                    "chief": "851104",
                    "priority": "2",
                    "status": "1",
                    "modify_date": "27-2月 -19 11.51.41.117000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc9ac212001a",
                    "depth": "2",
                    "parentUuid": "5",
                    "name": "環境暨職業安全衛生室",
                    "deptId": "ES",
                    "description": "",
                    "chief": "901018",
                    "priority": "3",
                    "status": "1",
                    "modify_date": "30-10月-12 05.04.15.956000000 下午",
                    "modify_by": "hyweb",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc9b05e1001b",
                    "depth": "2",
                    "parentUuid": "5",
                    "name": "編輯中心",
                    "deptId": "PB",
                    "description": "",
                    "chief": "850710",
                    "priority": "4",
                    "status": "1",
                    "modify_date": "30-10月-12 05.04.42.150000000 下午",
                    "modify_by": "hyweb",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8a8a846432fafc420132fc9b4a7c001c",
                    "depth": "2",
                    "parentUuid": "5",
                    "name": "英文編輯室",
                    "deptId": "SE",
                    "description": "",
                    "chief": "960820",
                    "priority": "5",
                    "status": "1",
                    "modify_date": "30-10月-12 05.05.21.460000000 下午",
                    "modify_by": "hyweb",
                    "upper_certify": "0"
                },
                {
                    "uuid": "1",
                    "depth": "1",
                    "parentUuid": "dept_root_id",
                    "name": "研究部門",
                    "deptId": "1",
                    "description": "group",
                    "chief": "hyweb",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "13-10月-11 12.00.00.000000000 上午",
                    "modify_by": "hyweb",
                    "upper_certify": ""
                },
                {
                    "uuid": "2",
                    "depth": "1",
                    "parentUuid": "dept_root_id",
                    "name": "研究支援部門",
                    "deptId": "2",
                    "description": "group",
                    "chief": "hyweb",
                    "priority": "2",
                    "status": "1",
                    "modify_date": "13-10月-11 12.00.00.000000000 上午",
                    "modify_by": "hyweb",
                    "upper_certify": ""
                },
                {
                    "uuid": "3",
                    "depth": "1",
                    "parentUuid": "dept_root_id",
                    "name": "行政管理部門",
                    "deptId": "3",
                    "description": "group",
                    "chief": "hyweb",
                    "priority": "3",
                    "status": "1",
                    "modify_date": "13-10月-11 12.00.00.000000000 上午",
                    "modify_by": "hyweb",
                    "upper_certify": ""
                },
                {
                    "uuid": "4",
                    "depth": "1",
                    "parentUuid": "dept_root_id",
                    "name": "專案單位",
                    "deptId": "4",
                    "description": "group",
                    "chief": "hyweb",
                    "priority": "4",
                    "status": "1",
                    "modify_date": "13-10月-11 12.00.00.000000000 上午",
                    "modify_by": "hyweb",
                    "upper_certify": ""
                },
                {
                    "uuid": "5",
                    "depth": "1",
                    "parentUuid": "dept_root_id",
                    "name": "行政部門",
                    "deptId": "5",
                    "description": "group",
                    "chief": "hyweb",
                    "priority": "5",
                    "status": "1",
                    "modify_date": "13-10月-11 12.00.00.000000000 上午",
                    "modify_by": "hyweb",
                    "upper_certify": ""
                },
                {
                    "uuid": "8ac0ab973ace10f1013ad88aaba403a3",
                    "depth": "3",
                    "parentUuid": "8a8a84d93079c04001307a11e7c00001",
                    "name": "群體健康科學研究所臨床試驗統計組",
                    "deptId": "PH",
                    "description": "",
                    "chief": "870804",
                    "priority": "4",
                    "status": "0",
                    "modify_date": "05-12月-12 09.04.01.814000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973ace10f1013ad88c9b7d03a4",
                    "depth": "3",
                    "parentUuid": "8a8a84d93079c04001307a11e7c00001",
                    "name": "群體健康科學研究所衛生政策轉譯研究組",
                    "deptId": "PH",
                    "description": "",
                    "chief": "860910",
                    "priority": "5",
                    "status": "0",
                    "modify_date": "05-12月-12 09.04.11.369000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973ace10f1013ad4ca4595035b",
                    "depth": "3",
                    "parentUuid": "8a8a84d93079c04001307a11e7c00001",
                    "name": "群體健康科學研究所醫療保健研究組",
                    "deptId": "PH",
                    "description": "",
                    "chief": "990812",
                    "priority": "2",
                    "status": "0",
                    "modify_date": "05-12月-12 09.03.43.960000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973f78295101403dad726f0d7f",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "生醫工程與奈米醫學研究所",
                    "deptId": "BN",
                    "description": "簡稱-醫工奈米所",
                    "chief": "30818",
                    "priority": "2",
                    "status": "1",
                    "modify_date": "14-8月 -14 11.58.37.060000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab97411b4b41014125bcbdc100d8",
                    "depth": "2",
                    "parentUuid": "6",
                    "name": "第二測試單位",
                    "deptId": "T2",
                    "description": "",
                    "chief": "PD02TEST",
                    "priority": "5",
                    "status": "0",
                    "modify_date": "17-9月 -13 12.01.16.829000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab974cb54e35014cfe75d36105a1",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "國家環境醫學研究所",
                    "deptId": "EM",
                    "description": "",
                    "chief": "hyweb",
                    "priority": "5",
                    "status": "1",
                    "modify_date": "18-8月 -20 03.37.36.102000000 下午",
                    "modify_by": "hyweb",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973a2b374a013a6d1fb4dd01ec",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "神經及精神醫學研究中心",
                    "deptId": "NP",
                    "description": "",
                    "chief": "90111",
                    "priority": "11",
                    "status": "1",
                    "modify_date": "06-1月 -20 05.45.36.477000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973a2b374a013a6d2cd46201ed",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "國家環境毒物研究中心",
                    "deptId": "EH",
                    "description": "",
                    "chief": "030804-1",
                    "priority": "4",
                    "status": "1",
                    "modify_date": "18-5月 -15 01.05.27.208000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973a9c091d013aafcab53e0001",
                    "depth": "2",
                    "parentUuid": "4",
                    "name": "動物行為核心設施",
                    "deptId": "AB",
                    "description": "",
                    "chief": "010202-1",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "20-8月 -14 05.08.03.022000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973a9c091d013aafcb228f0002",
                    "depth": "2",
                    "parentUuid": "4",
                    "name": "病理核心實驗室",
                    "deptId": "PT",
                    "description": "",
                    "chief": "920503-1",
                    "priority": "3",
                    "status": "1",
                    "modify_date": "06-12月-12 06.48.59.168000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973a9c091d013aafcc0c320003",
                    "depth": "2",
                    "parentUuid": "6",
                    "name": "主任秘書室",
                    "deptId": "PL",
                    "description": "",
                    "chief": "70117",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "19-4月 -18 09.31.34.507000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973a9c091d013aafcc4f100004",
                    "depth": "2",
                    "parentUuid": "6",
                    "name": "院長室",
                    "deptId": "PP",
                    "description": "",
                    "chief": "61206",
                    "priority": "2",
                    "status": "1",
                    "modify_date": "14-12月-17 02.35.56.499000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973a9c091d013aafcc92100005",
                    "depth": "2",
                    "parentUuid": "6",
                    "name": "副院長室",
                    "deptId": "VP",
                    "description": "",
                    "chief": "70201",
                    "priority": "3",
                    "status": "1",
                    "modify_date": "19-4月 -18 09.32.09.620000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab973ace10f1013ad4c66a92035a",
                    "depth": "3",
                    "parentUuid": "8a8a84d93079c04001307a11e7c00001",
                    "name": "群體健康科學研究所生物統計與生物資訊研究組",
                    "deptId": "PH",
                    "description": "",
                    "chief": "860910",
                    "priority": "1",
                    "status": "0",
                    "modify_date": "05-12月-12 09.03.32.053000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab97404df5f201411545dad70931",
                    "depth": "2",
                    "parentUuid": "6",
                    "name": "系統測試用(勿選)",
                    "deptId": "QT",
                    "description": "qt-quit",
                    "chief": "010504-1",
                    "priority": "4",
                    "status": "1",
                    "modify_date": "13-1月 -17 03.39.22.576000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab9745f4287c0146cba779650ffb",
                    "depth": "2",
                    "parentUuid": "4",
                    "name": "國衛院論壇",
                    "deptId": "FR",
                    "description": "\"現在的代碼似乎為FO上面權責單位為院長室。\"",
                    "chief": "FR01WU",
                    "priority": "3",
                    "status": "1",
                    "modify_date": "20-3月 -15 11.38.14.867000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "6",
                    "depth": "1",
                    "parentUuid": "dept_root_id",
                    "name": "其他單位",
                    "deptId": "6",
                    "description": "group",
                    "chief": "hyweb",
                    "priority": "6",
                    "status": "1",
                    "modify_date": "30-10月-12 11.31.16.278000000 上午",
                    "modify_by": "hyweb",
                    "upper_certify": ""
                },
                {
                    "uuid": "8ac0ab973b655908013b840649070769",
                    "depth": "3",
                    "parentUuid": "8ac0ab973a9c091d013aafcc92100005",
                    "name": "學務辦公室(自109.05.01起併入學發處)",
                    "deptId": "SA",
                    "description": "自109.05.01起併入學發處",
                    "chief": "980943-1",
                    "priority": "1",
                    "status": "1",
                    "modify_date": "11-5月 -20 10.22.16.488000000 上午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },
                {
                    "uuid": "8ac0ab97544b61ed0155234f01670b4b",
                    "depth": "2",
                    "parentUuid": "1",
                    "name": "國家蚊媒傳染病防治研究中心",
                    "deptId": "MR",
                    "description": "",
                    "chief": "080807-1",
                    "priority": "10",
                    "status": "1",
                    "modify_date": "13-8月 -19 03.39.32.725000000 下午",
                    "modify_by": "10504",
                    "upper_certify": "0"
                },




            ];
            break;
        case ('fakeBasicPlan'):
            model = [
                {
                    uuid: '8ac0ab973ab94b1e013ab9ba416800bd',// 流水號
                    planYear: '101',//計畫年度
                    planType: '402881902f71a65b012f71b76a070001',// 計畫類型:院內行政、院內研究…
                    planSubType: '8a8a89fd2f7607c9012f7614e5010001',// 計畫子類型:五項計畫的子類別
                    serialNo: 'IM-101-AP-01',//計畫編號
                    planName: '自動化高速藥物篩選研究',//中文計畫名稱
                    planNameEng: 'Research for high throughput screening',//英文計畫名稱
                    executiveDept: '2c90829732fc6dd80132fc7a9c200001',// 執行單位
                    dateStart: '01-1月 -13 12.00.00.000000000 上午',//計畫期程(開始)
                    dateEnd: '31-12月-14 12.00.00.000000000 上午',//計畫期程(結束)
                    scheduleYear: '1',// 如計畫期程為97-100年的計畫，且計畫為第2年計畫， scheduleYear->2
                    chairman: '860807-1',//計畫主持人
                    excerpt: '"技藥研所以任務導向之方式，著重於癌症、糖尿病和心血管疾病等新陳代謝疾病以及病毒感染等相關之藥物及生物技術的研究與發展。\\n本所自動化高速藥物篩選核心設施整合了自動化機器手臂的實驗平台、純化合物庫與化學生物整合性系統，透過結合電腦控制之自動化操作方式、高速及高效率活性分析方法和資料庫管理及分析，可在短時間內分析數萬至幾十萬個化合物的生物活性。本核心設施將依任務需求及各藥物發展所需，進行下列工作：\\n- 負責建立符合自動化流程且適用於高速藥物篩選系統的生物活性篩選方法。\\n- 進行高速藥物篩選實驗與實驗數據分析。\\n- 持續針對已有的分子標的提供活性測試。\\n本核心設施目前持續支援3大類(含6種) 不同的活性測試方法，包含：\\n - 抗癌藥物部分：MTS 細胞毒性測試方法、IDO 抑制劑測試方法和CXCR4拮抗劑測試方法。\\n - 抗糖尿病藥物部分：DPP4 抑制劑測試方法和SGLT2 抑制劑測試方法。\\n - 抗病毒藥物部分：抗C 型肝炎病毒藥物測試方法。\\n未來將新增ETA 拮抗劑和抗登革熱病毒藥物之研發。肺動脈高血壓可導致心臟衰竭，而ETA 拮抗劑可用於治療肺動脈高血壓。登革熱病毒由帶有病毒之病媒蚊叮咬而致病，可引起典型登革熱，導致高熱、頭部、肌肉、骨頭、關節痛，後眼窩痛以及發疹，也可能引起登革出血熱，嚴重時會因出血而致命。本核心設施將嘗試建立ETA 拮抗劑和抗登革熱病毒藥物之高速藥物篩選方法，以便後續進行高速藥物篩選。"',//中文計畫內容
                    excerptEng: '',//英文摘要
                    comments: '',//備註
                    processStatus: '8a8a89fd3091b333013091b7f4230002',//流程狀態: 計畫研提、管考設定、管考…等
                    activeStatus: '8a8a9d40308e05da01308e4b28bb000b',//計畫執行狀態: 執行中、刪除、申請取消、申請終止、取消、終止、結案
                    certifyComments: '',//批註
                    unlocked: '0',//不解鎖->0 、 解鎖 ->1
                    registerDate: '06-11月-12 02.33.28.884000000 下午',//登錄日期
                    registerBy: '960605',//登錄人
                    modifyDate: '06-6月 -14 10.50.34.759000000 上午',//修改日期
                    modifyBy: '010504',//修改人
                    subPlanQuantity: '0',//子計畫數量
                    version: '',//版本(若為null，表示是第一版，有新的版本的話，之後就會是第2、3、4...版)
                    originalDeptChiefName: '石全',//當計畫同意終止、取消、結案的單位主管名稱
                    outlineType: '8a8a89fd2eec6ede012eec79a11d0006',//綱要計畫別
                    secondOutlineType: '8a8a89fd2eec6ede012eec79a11d0006',//第二綱要計畫別
                }
                , {
                    uuid: '',// 流水號
                    planYear: '',//計畫年度
                    planType: '',// 計畫類型:院內行政、院內研究…
                    planSubType: '',// 計畫子類型:五項計畫的子類別
                    serialNo: '',//計畫編號
                    planName: '',//中文計畫名稱
                    planNameEng: '',//英文計畫名稱
                    executiveDept: '',// 執行單位
                    dateStart: '',//計畫期程(開始)
                    dateEnd: '',//計畫期程(結束)
                    scheduleYear: '',// 如計畫期程為97-100年的計畫，且計畫為第2年計畫， scheduleYear->2
                    chairman: '',//計畫主持人
                    excerpt: '',//中文計畫內容
                    excerptEng: '',//英文摘要
                    comments: '',//備註
                    processStatus: '',//流程狀態: 計畫研提、管考設定、管考…等
                    activeStatus: '',//計畫執行狀態: 執行中、刪除、申請取消、申請終止、取消、終止、結案
                    certifyComments: '',//批註
                    unlocked: '',//不解鎖->0 、 解鎖 ->1
                    registerDate: '',//登錄日期
                    registerBy: '',//登錄人
                    modifyDate: '',//修改日期
                    modifyBy: '',//修改人
                    subPlanQuantity: '',//子計畫數量
                    version: '',//版本(若為null，表示是第一版，有新的版本的話，之後就會是第2、3、4...版)
                    originalDeptChiefName: '',//當計畫同意終止、取消、結案的單位主管名稱
                    outlineType: '8a8a89fd2eec6ede012eec79a11d0006',//綱要計畫別
                    secondOutlineType: '8a8a89fd2eec6ede012eec79a11d0006',//第二綱要計畫別
                    planAttribute: '',//計畫屬性
                    background: '持續協助業務單位人員建立內部控制基本觀念，輔導相關人員瞭解其職責範圍作業活動之控制重點，並經由協助業務單位針對各項作業的檢查，以修正與政策、作業程序、既定目標或預期標準不符之項目，且針對問題採取必要之修正行動，以確保營運遵循原規劃方向進行。本項計畫包括『作業流程更新研討專案』及『內部控制制度自我評估』。主要目的為：透過導入風險管理的觀念及輔導單位針對自身的業務進行內控自評作業，協助受查者明確定義業務職責，進而辨識相關的風險曝露程度，以重新檢視相關控制的有效性，進而由其主動修正相關作業流程。',//計畫背簡介
                    steps: '"透過輔導、教育訓練、小組討論及個別作業訪談及諮詢等方式協助業務單位人員建立內部控制基本觀念，檢查內部各項活動是否確實遵循制度要求，以促進營運之效率及效果。初步將各專案之執行任務區分為四個階段，於各階段中，將視情況所需，彈性把相關單位納入專案範圍內。\\n各階段之專案範圍規劃如下：\\n1.第一階段：針對各單位編制之書面內部控制文件進行覆核，透過訪談與討論的方式檢視其合理性，以確保相關內控制度與文件合於現況。\\n2.第二階段：驗證現行各項營運作業是否符合內部控制制度之要求。為了強化內控制度之有效性，將檢視各項控制要點之執行情況，以確保作業程序符合制度與法令之要求。\\n3.第三階段：彙整前兩階段之執行成果，進行『作業流程更新研討專案』之書面報告編製，並且陳請相關主管核示。完成核可程序後，將對相關作業人員進行內部控制之教育訓練，以期能充分傳達各項內控要點，並且落實執行。\\n4.第四階段：運用執行年度稽核業務的同時，進行『內部控制制度自我評估』作業。由本室規劃內控自評檢查表，並且輔導受查單位針對自身的業務進行內控自評作業。透過填寫自評檢查表的過程，協助受查者明確定義業務職責，進而辨識相關的風險曝露程度，以重新檢視相關控制的有效性。"',//計畫實施說明與步驟
                    effects: '"1.『作業流程更新研討專案』之預期效益詳列如下：\\n(1).促使業務單位人員明確定義職務目標，負起控制及風險管理之責任與義務。\\n(2).藉由編製標準作業流程之過程，促進相關單位之溝通，並共同檢討控管現況，發現並提出控管改善建議，以促進作業流程之效能。\\n(3).藉由內部控制制度之落實遵行，以促進健全運作，並達成促進營運效率、維護資產安全（如智慧財產權）、確保財務及管理資訊之可靠性與完整性，及遵守相關法令規章之目標。\\n2.『內部控制制度自我評估』之預期效益詳列如下：\\n(1).內控自評的結果直接反映一線業務人員的對該自身工作看法，不但可直接反映現行各項制度的有效性，亦可直接聚焦於關鍵風險上。\\n(2).透過填表過程，將有效傳達內部控制制度的意涵，有助於增加其對整個組織的控制概念，進而提升管理效率。\\n(3).內控自評作業需要經持續的分析與討論，將可增進各層級人員的溝通。\\n(4).內控自評的結果將有助於將稽核工作著重在高風險的事項，以提升稽核效率。\\n(5).強化相關單位人員內部控制觀念、重要性及控制活動，提升人員之管理效能。\\n(6).藉由作業目標及風險之辨識，使控制活動係以降低風險作為設計出發點，並適當衡量控制活動之成本及效益，期使本院資源適當分配。\\n(7).透過輔導，採用教育訓練、小組討論及個別作業訪談及諮詢等方式，引導本院人員具備自行設計及維護書面內部控制制度之能力。\\n(8).透過作業流程更新與研討專案，將已建立之內控文件進行覆核，透過與相關作業人員之訪談，重新審視各項程序之合理性與有效性，並且協助建立符合現況之內控文件，以做為內部控制之依據。\\n(9).透過內控文件之建置，釐清各項作業的主要執行程序與次要執行程序，清楚定義各項作業所涵蓋之人員，以及各個作業人員之權利與義務。如此，可讓相關人員釐清其應扮演的角色與職掌。"',//預期效果
                    certifyProposalStatus: '8a8a89fd2f7adee7012f7aefccc30003',//簽核狀態-研提
                    certifyManageSetupStatus: '8a8a89fd2f7adee7012f7aef576b0001',//簽核狀態-管考設定
                    certifyMidtermStatus: '',//簽核狀態-期中
                    certifyFinalStatus: '',//簽核狀態-期末
                    certifyOutcomeStatus: '',//簽核狀態-成果
                    certifyChangeDataStatus: '8a8a89fd2f7adee7012f7aef576b0001',//簽核狀態-計畫資料變更
                    certifyChangeActiveStatus: '8a8a89fd2f7adee7012f7aef576b0001',//簽核狀態-計畫狀態變更
                    certifyPlanFundStatus: '8a8a89fd2f7adee7012f7aef576b0001',//簽核狀態-計畫經費
                }];
            break;
        case ('fakeInternalAdminPlan'):
            model = [

                {
                    uuid: '8ac0ab973b655908013b87f3806c07d3',
                    outlineType: '8a8a89fd2eec6ede012eec79a11d0006',//綱要計畫別
                    secondOutlineType: '8a8a89fd2eec6ede012eec79a11d0006',//第二綱要計畫別
                    planAttribute: '',//計畫屬性
                    background: '持續協助業務單位人員建立內部控制基本觀念，輔導相關人員瞭解其職責範圍作業活動之控制重點，並經由協助業務單位針對各項作業的檢查，以修正與政策、作業程序、既定目標或預期標準不符之項目，且針對問題採取必要之修正行動，以確保營運遵循原規劃方向進行。本項計畫包括『作業流程更新研討專案』及『內部控制制度自我評估』。主要目的為：透過導入風險管理的觀念及輔導單位針對自身的業務進行內控自評作業，協助受查者明確定義業務職責，進而辨識相關的風險曝露程度，以重新檢視相關控制的有效性，進而由其主動修正相關作業流程。',//計畫背簡介
                    steps: '"透過輔導、教育訓練、小組討論及個別作業訪談及諮詢等方式協助業務單位人員建立內部控制基本觀念，檢查內部各項活動是否確實遵循制度要求，以促進營運之效率及效果。初步將各專案之執行任務區分為四個階段，於各階段中，將視情況所需，彈性把相關單位納入專案範圍內。\\n各階段之專案範圍規劃如下：\\n1.第一階段：針對各單位編制之書面內部控制文件進行覆核，透過訪談與討論的方式檢視其合理性，以確保相關內控制度與文件合於現況。\\n2.第二階段：驗證現行各項營運作業是否符合內部控制制度之要求。為了強化內控制度之有效性，將檢視各項控制要點之執行情況，以確保作業程序符合制度與法令之要求。\\n3.第三階段：彙整前兩階段之執行成果，進行『作業流程更新研討專案』之書面報告編製，並且陳請相關主管核示。完成核可程序後，將對相關作業人員進行內部控制之教育訓練，以期能充分傳達各項內控要點，並且落實執行。\\n4.第四階段：運用執行年度稽核業務的同時，進行『內部控制制度自我評估』作業。由本室規劃內控自評檢查表，並且輔導受查單位針對自身的業務進行內控自評作業。透過填寫自評檢查表的過程，協助受查者明確定義業務職責，進而辨識相關的風險曝露程度，以重新檢視相關控制的有效性。"',//計畫實施說明與步驟
                    effects: '"1.『作業流程更新研討專案』之預期效益詳列如下：\\n(1).促使業務單位人員明確定義職務目標，負起控制及風險管理之責任與義務。\\n(2).藉由編製標準作業流程之過程，促進相關單位之溝通，並共同檢討控管現況，發現並提出控管改善建議，以促進作業流程之效能。\\n(3).藉由內部控制制度之落實遵行，以促進健全運作，並達成促進營運效率、維護資產安全（如智慧財產權）、確保財務及管理資訊之可靠性與完整性，及遵守相關法令規章之目標。\\n2.『內部控制制度自我評估』之預期效益詳列如下：\\n(1).內控自評的結果直接反映一線業務人員的對該自身工作看法，不但可直接反映現行各項制度的有效性，亦可直接聚焦於關鍵風險上。\\n(2).透過填表過程，將有效傳達內部控制制度的意涵，有助於增加其對整個組織的控制概念，進而提升管理效率。\\n(3).內控自評作業需要經持續的分析與討論，將可增進各層級人員的溝通。\\n(4).內控自評的結果將有助於將稽核工作著重在高風險的事項，以提升稽核效率。\\n(5).強化相關單位人員內部控制觀念、重要性及控制活動，提升人員之管理效能。\\n(6).藉由作業目標及風險之辨識，使控制活動係以降低風險作為設計出發點，並適當衡量控制活動之成本及效益，期使本院資源適當分配。\\n(7).透過輔導，採用教育訓練、小組討論及個別作業訪談及諮詢等方式，引導本院人員具備自行設計及維護書面內部控制制度之能力。\\n(8).透過作業流程更新與研討專案，將已建立之內控文件進行覆核，透過與相關作業人員之訪談，重新審視各項程序之合理性與有效性，並且協助建立符合現況之內控文件，以做為內部控制之依據。\\n(9).透過內控文件之建置，釐清各項作業的主要執行程序與次要執行程序，清楚定義各項作業所涵蓋之人員，以及各個作業人員之權利與義務。如此，可讓相關人員釐清其應扮演的角色與職掌。"',//預期效果
                    certifyProposalStatus: '8a8a89fd2f7adee7012f7aefccc30003',//簽核狀態-研提
                    certifyManageSetupStatus: '8a8a89fd2f7adee7012f7aef576b0001',//簽核狀態-管考設定
                    certifyMidtermStatus: '',//簽核狀態-期中
                    certifyFinalStatus: '',//簽核狀態-期末
                    certifyOutcomeStatus: '',//簽核狀態-成果
                    certifyChangeDataStatus: '8a8a89fd2f7adee7012f7aef576b0001',//簽核狀態-計畫資料變更
                    certifyChangeActiveStatus: '8a8a89fd2f7adee7012f7aef576b0001',//簽核狀態-計畫狀態變更
                    certifyPlanFundStatus: '8a8a89fd2f7adee7012f7aef576b0001',//簽核狀態-計畫經費
                },
                {
                    uuid: '1',
                    outlineType: '',//綱要計畫別
                    secondOutlineType: '',//第二綱要計畫別
                    planAttribute: '',//計畫屬性
                    background: '。',//計畫背簡介
                    steps: '',//計畫實施說明與步驟
                    effects: '',//預期效果
                    certifyProposalStatus: '',//簽核狀態-研提
                    certifyManageSetupStatus: '',//簽核狀態-管考設定
                    certifyMidtermStatus: '',//簽核狀態-期中
                    certifyFinalStatus: '',//簽核狀態-期末
                    certifyOutcomeStatus: '',//簽核狀態-成果
                    certifyChangeDataStatus: '',//簽核狀態-計畫資料變更
                    certifyChangeActiveStatus: '',//簽核狀態-計畫狀態變更
                    certifyPlanFundStatus: '',//簽核狀態-計畫經費
                }

            ]
            break;

    }

    return JSON.parse(JSON.stringify(model))
}



// 导出所有函数的对象
export const globalModels = {
    getCommonArrayTextUtil,
    getCommonArrayUtil,
    getModel,

};

