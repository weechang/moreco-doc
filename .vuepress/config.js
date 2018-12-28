module.exports = {
    port: "3000",
    base: "/",
    dest: "docs",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "moreco",
            description: "Java Web全生命周期解决方案"
        }
    },
    head: [["link", {rel: "icon", href: `/favicon.ico`}]],
    themeConfig: {
        repo: "weechang/moreco",
        docsRepo: "weechang/moreco-doc",
        editLinks: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "选择语言",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: "指南",
                        link: "/guide/"
                    },
                    {
                        text: "选择语言",
                        items: [
                            {
                                text: "简体中文",
                                link: "/"
                            }
                        ]
                    },
                    {
                        text: "生态",
                        items: [
                            {
                                text: "在线演示",
                                link: "https://moreco.weechang.xyz"
                            },
                            {
                                text: "前端项目",
                                link: "https://github.com/weechang/moreco-view"
                            }
                        ]
                    },

                ],
                sidebar: {
                    "/guide/": genSidebarConfig("指南")
                }
            }
        }
    }
}

function genSidebarConfig(title) {
    return [
        {
            title: "项目简介",
            collapsable: false,
            children: [""]
        },
        {
            title: "开发指南",
            collapsable: false,
            children: ["message","oss","monitor"]
        },
        {
            title: "架构指南",
            collapsable: false,
            children: ["spring-boot","spring-cloud","axon"]
        },
        {
            title: "FAQ",
            collapsable: false,
            children: ["faq"]
        }
    ];
}
