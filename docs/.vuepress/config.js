/*
 * @Author: huangwensong huangwensong@58.com
 * @Date: 2023-10-12 16:20:51
 * @LastEditors: huangwensong huangwensong@58.com
 * @LastEditTime: 2023-10-26 19:38:03
 * @FilePath: /learn/blogsDocs/docs/.vuepress/config.js
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
        type: 'blog',
        nav: [
            { text: "首页", link: "/" },
            {
                text: "Samuel Huang 的博客",
                items: [
                    { text: "掘金", link: "" },
                    { text: "Github", link: "https://github.com/SamuelHuang-HWS" }
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
                ]
            },
            {
                title: "小程序",
                path: "/blogs/xcx/xcx1",
                collapsable: true,
                children: [
                    { title: "第一篇", path: "/blogs/xcx/xcx1" },
                ]
            },
            {
                title: "计算机网络",
                path: "/blogs/computerNetwork/cn1",
                collapsable: true,
                children: [
                    { title: "当你在浏览器中输入 google.com 并且按下回车之后发生了什么?", path: "/blogs/computerNetwork/cn1" }
                ]
            },
            {
                title: "浏览器",
                path: "/blogs/computerNetwork/cn1",
                collapsable: true,
                children: [
                    { title: "当你在浏览器中输入 google.com 并且按下回车之后发生了什么?", path: "/blogs/computerNetwork/cn1" }
                ]
            }
        ]

    }

}