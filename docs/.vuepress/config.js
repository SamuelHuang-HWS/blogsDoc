/*
 * @Author: huangwensong huangwensong@58.com
 * @Date: 2023-10-12 16:20:51
 * @LastEditors: huangwensong huangwensong@58.com
 * @LastEditTime: 2023-10-13 11:34:05
 * @FilePath: /learn/blobsDoc/docs/.vuepress/config.js
 * @Description: 
 */
module.exports = {
    title: 'Samuel Huang blobs doc',
    description: '个人博客，记录学习过程',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        // 主题 移动端优化
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],

    theme: 'reco',
    plugins: [
        ['@vuepress-reco/vuepress-plugin-back-to-top']
    ],
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            {
                text: "Samuel Huang 的博客",
                items: [
                    { text: "掘金", link: "" },
                    { text: "Github", link: "" }
                ]
            }
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "博客简介", path: "/" }],
            },
            {
                title: "基础篇",
                path: "/blogs/1",
                collapsable: true,
                children: [
                    { title: "第一篇", path: "/blogs/1" },
                    // { title: "第二篇", path: "/blogs/2" },
                ]
            }
        ]

    }

}