
export default {

    install(Vue) {
        Vue.prototype.getModel = function (value) {
            var model
            if (value == "formMapping") {
                model = {
                    "createDate": null,
                    "formId": "init",
                    "formKey": null,
                    "modifyDate": null,
                    "status": null,
                    "targetId": null,
                    "targetTable": null,
                    formStep: null,
                    phone: null,
                    countryCode: null,
                    country: null,
                }
            } else if (value == "riverZoneTopic") {
                //20230923
                model = {
                    "issueId": null,
                    "title": null,
                    "content": null,
                    "legislatorId": null,
                    "legislatorName": null,
                    "districtId": null,
                    "districtName": null,
                    "riverId": null,
                    "riverName": null,
                    "reservoirId": null,
                    "reservoirName": null,
                    "creatorId": null,
                    "creatorName": null,
                    "modifierId": null,
                    "modifierName": null,
                    "createDate": null,
                    "lastModifiedDate": null,
                    "dataSrc": null
                }
            } else if (value == "issue") {
                //20230923
                model = {
                    "allocations": 0,
                    "allocationsNote": null,
                    "coworkers": null,
                    "host": null,
                    "issueLevel": null,
                    "legislator": null,
                    "note": null,
                    "occasion": [],
                    "other": null,
                    "procession": null,
                    "summary": null

                }
            } else if (value == 'QA') {
                model = {
                    "legislator": null,
                    "summary": null,
                    "host": null,
                    "auditor": null,
                    "responseApproach": null,
                    "procession": null,
                    "other": null,
                    "supervisor": null,
                }
            } else if (value == 'promise') {
                model = {
                    "legislator": null,
                    "promisor": null,
                    "summary": null,
                    "deadLine": null,
                    "notifyTarget": null,
                    "replyDate": null,
                    "officialDocNo": null
                }

            } else if (value == "memberAccount") {
                model = {

                }
            } else if (value == "takingCareCase") {
                model = {
                    uuid: null,
                    allocationsNote: null,
                    procession: null,
                    note: null,
                    summary: null,
                }

            } else if (value == "uploaderWhiteList") {
                model = {
                    uuid: null,
                    name: null,
                    number: null,
                    note: null,
                    "createDate": null,
                    "createBy": null,
                    "status": null,

                }

            } else if (value == "hotelData") {
                model = {
                    address: null,
                    area: null,
                    capacity: null,
                    createDate: null,
                    description: null,
                    faxNumber: null,
                    headName: null,
                    hotelId: null,
                    hotelName: null,
                    identificationNumber: null,
                    lastModifyDate: null,
                    modifierId: null,
                    modifierName: null,
                    numberOfHead: null,
                    numberOfRoom: null,
                    roomPrice: null,
                    status: null,
                    telNumber: null,
                    type: null,
                    zipCode: null,
                }

            } else if (value == "preparedHotelData") {
                model = {
                    "approveDate": null,
                    "buildingOverview": null,
                    "createDate": null,
                    "creatorId": null,
                    "creatorName": null,
                    "district": null,
                    "floorArea": 0,
                    "headName": null,
                    "hotelName": null,
                    "lastModifyDate": null,
                    "lotSize": 0,
                    "modifierId": null,
                    "modifierName": null,
                    "numberOfRoom": 0,
                    "preparedId": null,
                    "preparedProgresses": [

                    ],
                    "registerDate": null,
                    "registrant": null,
                    "registrationNumber": null
                }

            } else if (value == "preparedProgresses") {
                model = {
                    "applicationProgress": null,
                    "createDate": null,
                    "creatorId": null,
                    "creatorName": null,
                    "lastModifyDate": null,
                    "modifierId": null,
                    "modifierName": null,
                    "preparedProgressId": null,
                    "priority": 0
                }

            } else if (value == "formClass") {
                model = {
                    enableEditStep: null,
                    formClassId: null,
                    latestStep: null,
                }

            } else if (value == "formWep1_0") {
                model = {
                    email: null,
                    formId: null,
                    formWep1_0Id: "init",
                    phone: null,
                    "status": null,
                    "createDate": new Date(),
                    "modifyDate": new Date(),
                    countryCode: "",
                    country: null,
                }

            } else if (value == "formWep1_1") {
                model = {
                    categoryCounseling: null,
                    commencementCounseling: null,
                    completionCounseling: null,
                    country: null,
                    formId: null,
                    formWep1_1Id: "init",
                    gender: null,
                    name: null,
                    projectName: null,
                    registration: null,
                    "status": null,
                    "createDate": null,
                    "modifyDate": null,
                }

            } else if (value == "formWep1_2") {
                model = {
                    beneficiary: null,
                    createDate: null,
                    dailyWorkingHours: null,
                    establishedDate: null,
                    formId: null,
                    formWep1_2Id: "init",
                    modifyDate: null,
                    monthlySale: null,
                    numberOfEmployees: null,
                    revenueInvestedInHouseholdExpenses: 0,
                    revenueReinvestedInBusinessOperation: 0,
                    status: null,
                    monthlyRevenue: 0,
                    householdExpenses: 0,
                    businessOperation: 0,
                }

            } else if (value == "employer") {
                model = {
                    "address": null,
                    "businessName": null,
                    "businessStatus": null,
                    "contactPerson": null,
                    "createDate": null,
                    "district": null,
                    "email": null,
                    "employerId": null,
                    "firstName": null,
                    "industry": null,
                    "jobTitle": null,
                    "lastName": null,
                    "modifyDate": null,
                    "phone": null,
                    "staffQa1": null,
                    "staffQa2": null,
                    "staffQa3": null,
                    "staffQa4": null,
                    "staffQb1": null,
                    "staffQb2": null,
                    "staffQb3": null,
                    "staffQb4": null,
                    "staffQc1": null,
                    "staffQc2": null,
                    "staffQc3": null,
                    "staffQc4": null,
                    "staffQd1": null,
                    "staffQd2": null,
                    "staffQd3": null,
                    "staffQd4": null,
                    "staffQe1": null,
                    "staffQe2": null,
                    "staffQe3": null,
                    "staffQe4": null,
                    "status": null
                }
            } else if (value == "employerTerminated") {
                model = {
                    dateOfEmployment: null,
                    dateOfTermination: null,
                    email: null,
                    jobTitle: null,
                    name: null,
                    paymentMethods: null,
                    phone: null,
                    salary: null,
                    terminatedId: null
                }
            } else if (value == 'employerVacancies') {
                model = {
                    hours: null,
                    jobTitle: null,
                    location: null,
                    qualifications: null,
                    startDate: null,
                    vacanciesId: null,
                    vacanciesNumber: null
                }
            } else if (value == 'maintainDetailItem') {
                model = {
                    location: "碧潭風景區",
                    project: "除草部分",
                    desc: "西岸",
                    term: "2023-12-31",
                    finishPic: null,
                }
            } else if (value == 'sceneAreaFineItem') {
                model = {
                    penaltyId: null,
                    referenceId: null,
                    issuingDocId: null,
                    regulations: null,
                    item: null,
                    closingDocId: null,
                    closingDate: null,
                    handlingSituation: null,
                    handlingResult: null,
                    createDate: null,
                    creatorId: null,
                    creatorName: null,
                    modifierId: null,
                    modifierName: null,
                    lastModifyDate: null
                }
            } else if (value == 'sceneAreaPreservationItem') {
                model = { itemDate: "2020-01-02", coordinate: null }
            } else if (value == 'sceneAreaPassengerServiceItem') {
                model = {
                    touristServiceId: null,
                    referenceId: null,
                    serviceDate: null,
                    foreigner: null,
                    totalNumberOfTourist: null,
                    createDate: null,
                    creatorId: null,
                    creatorName: null,
                    modifierId: null,
                    modifierName: null,
                    lastModifyDate: null,
                    files: []
                }
            } else if (value == 'sACleanings') {
                model = {
                    uuid: null,
                    referenceId: null,
                    name: null,
                    number: null,
                    lon: null,
                    lat: null,
                    issuedDate: null,
                    files: [],
                    type: null,
                    modifyBy: null,
                    modifyDate: null,
                    createBy: null,
                    createDate: null,
                    status: null
                }
            } else if (value == 'landType') {
                model = { itemDate: "2020-01-03", coordinate: "25.032547, 121.518092" }
            }
            else if (value == 'monitorSystem') {
                model = {
                    moniterId: null,
                    moniterName: null,
                    rtspUrl: null,
                    createDate: null,
                    creatorId: null,
                    creatorName: null,
                    modifierId: null,
                    modifierName: null,
                    lastModifyDate: null,
                    moniterRecordDetails: []
                }
            }
            else if (value == 'monitorSystemDetail') {
                model = {
                    moniterRecordId: null,
                    recordNumber: null,
                    applicant: null,
                    title: null,
                    deptName: null,
                    destination: null,
                    isCopy: null,
                    administrator: null,
                    createDate: null,
                    creatorId: null,
                    creatorName: null,
                    modifierId: null,
                    modifierName: null,
                    lastModifyDate: null
                }
            }

            else if (value == 'tmCampsite') {
                model = {
                    "uuid": null,
                    "name": null,
                    "landSettled": null,
                    "landCode": null,
                    "landAddress": null,
                    "landType": null,
                    "usageZoneType": null,
                    "usageLandType": null,
                    "totalArea": null,
                    "validEqptArea": null,
                    "haMngmEqptArea": null,
                    "appName": null,
                    "appHomeTel": null,
                    "appWorkTel": null,
                    "appMobileTel": null,
                    "appHousehold": null,
                    "appIsIndigenous": null,
                    "appAddress": null,
                    "files": [],
                    "createBy": null,
                    "createDate": null,
                    "modifyBy": null,
                    "modifyDate": null,
                    "status": null
                }
            } else if (value == 'manage') {
                model = {
                    buildingId: null,
                    orgName: null,
                    buildingName: null,
                    isOwned: null,
                    isOutsourcing: null,
                    rentStartDate: null,
                    rentEndDate: null,
                    contractNo: null,
                    approvedDate: null,
                    approvedDocNo: null,
                    note: null,
                    lon: null,
                    lat: null,
                    region: null,
                    district: null,
                    lot: null,
                    landNumber: null,
                    registrationArea: null,
                    rentOrUsageArea: null,
                    usagePartition: null,
                    buildingUsage: null,
                    buildingPermitCategory: null,
                    numberOfFloors: null,
                    structureCategory: null,
                    buildingArea: null,
                    buildingCoverageRate: null,
                    floorAreaRatio: null,
                    totalFloorArea: null,
                    statutoryOpenArea: null,
                    permitApprovedDate: null,
                    buildingAddress: null,
                    outsourcingName: null,
                    legalBasis: null,
                    winnerCompany: null,
                    operationStartDate: null,
                    operationEndDate: null,
                    operationYearLimited: null,
                    investmentAmount: null,
                    fixedRoyaltyPayment: null,
                    outsourcingArea: null,
                    operationRoyaltyPayment: null,
                    creatorId: null,
                    creatorName: null,
                    modifierId: null,
                    modifierName: null,
                    createDate: null,
                    lastModifyDate: null,
                    files: []
                }
            } else if (value == 'plaintingProjects') {
                model = {
                    projectId: null,
                    projectName: null,
                    contractor: null,
                    createDate: null,
                    creatorId: null,
                    creatorName: null,
                    modifierId: null,
                    modifierName: null,
                    lastModifyDate: null,
                    plantingRepairedProjectDetails: null
                }
            } else if (value == 'plaintingProjectsDetail') {
                model = {
                    projectDetailId: null,
                    stage: null,
                    area: null,
                    item: null,
                    dueDate: null,
                    location: null,
                    createDate: null,
                    creatorId: null,
                    creatorName: null,
                    modifierId: null,
                    modifierName: null,
                    lastModifyDate: null,
                    files: []
                }
            } else if (value == 'authFunc') {
                model = {
                    "roleId": null,
                    "createDate": null,
                    "creatorDomain": null,
                    "creatorId": null,
                    "creatorName": null,
                    "description": null,
                    "domain": null,
                    "lastModifyDate": null,
                    "modifierDomain": null,
                    "modifierId": null,
                    "modifierName": null,
                    "name": null,
                    "status": null,
                    "type": null,
                    "validEndDate": null,
                    "validStartDate": null,
                    "authRoleTargetSet": [],
                    "authFuncPermissionList": []
                }
            } else if (value == 'notifyTask') {
                model = {

                    uuid: null,
                    content: null,
                    total: null,
                    referenceId: null,
                    variable: null,
                    startDate: null,
                    endDate: null,
                    type: null,
                    typeInfo: null,
                    status: null,
                    createBy: null,
                    createDate: null,
                    lastModifyDate: null,
                    modifierId: null,
                    modifierName: null,
                    notifyTarget: []

                }
            } else if (value == 'notifyTarget') {
                model = {
                    uuid: null,
                    referenceId: null,
                    path: null,
                    name: null,
                    via: null,
                    status: null

                }
            }


            return JSON.parse(JSON.stringify(model));
        };





    }
}


