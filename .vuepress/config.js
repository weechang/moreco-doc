module.exports = {
    port: "3000",
    base: "/",
    dest: "docs",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "moreco",
            description: "moreco doc"
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
            title: "FAQ",
            collapsable: false,
            children: ["faq"]
        }
    ];
}