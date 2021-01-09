export const request = {
    baseURL: 'http://210.12.166.198:8081/api',
    lineURL: 'http://210.12.166.198:8081',
    LeftTopTitleDirector: "https://dmp.retchat.com/login/?username=jingfa_chart&siteid=P0V1",
    LeftBotTitleDirector: 'https://dmp.retchat.com/login/?username=jingfa_chart&siteid=P0V2',
    midTopTitleDirector: 'https://dmp.retchat.com/login/?username=jingfa_chart&siteid=P1S1D1',
    midBotTitleDirector: 'https://dmp.retchat.com/login/?username=jingfa_chart&siteid=P0V3',
    rightTopTitleDirector: 'https://dmp.retchat.com/login/?username=jingfa_chart&siteid=P1S2C2D1',
    rightBotTitleDirector: 'https://dmp.retchat.com/login/?username=jingfa_chart&siteid=P0V5',



    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDAzOTU4ODksInVzZXJuYW1lIjoiYWRtaW4ifQ.UH3fek-YFguQQBAPpvxYAO6IyValk-MMMNIbbeIKin8',

    getUserPermissionByToken: '/allInOne/sys/permission/getUserPermissionByToken',



    coreAreaSituationV2: '/gs/coreAreaSituationV2', //left top


    top10SituationV2: "/gs/top10SituationV2", //left bottom

    economicsSituationV2: '/gs/economicsSituationV2', //middle top
    everyAreaAnalysisV2: '/gs/everyAreaAnalysisV2', //middle bottom

    fixedSituationV2: '/gs/fixedSituationV2', //right top 
    monthCategoryDataV2: '/gs/monthCategoryDataV2', //right bottom



    // 园区画像
    getEssentialInformation: '/parkDistribution/getEssentialInformation',
    getMiddleData: '/parkDistribution/getMiddleData',
    getSettlementEnterpriseSituation: '/parkDistribution/getSettlementEnterpriseSituation',

    getEmphasisData: '/parkDistribution/getEmphasisData',
    moveEnterprises: '/parkDistribution/moveEnterprises',
    // 楼宇画像
    getEssentialInformationLy: '/parkDistribution/getEssentialInformationLy',






}