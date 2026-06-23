{{NoteTA|G1=MediaWiki}}<!-- 在本行下编辑模板说明 -->
{{Lua|Module:Special wikitext|Module:Module wikitext|Module:Special wikitext/JSON|Module:Special wikitext/Template}}
{{模板样式|Template:Special wikitext/JSON.css}}
{{ombox | small = yes| image = [[File:Wiki-tech-logo-js.svg|32px|alt=JavaScript]]| text = 本模板使用以下[[JavaScript]]脚本：<div> \*[[:MediaWiki:Gadget-SpecialWikitext.js]]

</div>}}
本系列工具主要目的是在无法显示标记模板或界面文字的特殊页面中补上标记模板或界面文字，以使标记维护模板或提删流程得以顺利进行。

本模板为[[Module:Special wikitext]]、[[Module:Module wikitext]]和[[MediaWiki:Gadget-SpecialWikitext.js]]的模板调用，目的是为了验证相关代码行为的一致性、调试、维护以及测试相关功能之用。

详细结果请参考本模板的测试样例：[[Template:Special wikitext/testcases]]。

== 功能 ==
;系列工具的功能：
{| class=wikitable
!colspan=3 style="border-style: solid solid none solid;"|功能
!rowspan=2|实现方式
|-
!style="border-style: none solid solid solid;"|{{0}}
!width=150px|内容模型
!命名空间
|-
!rowspan=4|插入Wikitext
|rowspan=2|JS、 JSON、 CSS
|User、MediaWiki
|内嵌至[[MediaWiki:Clearyourcache]]
|-
|其他命名空间
|rowspan=2|[[AJAX]]：当前版本内容提交[[Special:ApiHelp/parse|API:parse]]
|-
|[[Help:模板样式|模板样式]]、 纯文本及其他
|任何
|-
|rowspan=2|[[Lua]]
|rowspan=2|Module
|rowspan=2|内嵌至[[MediaWiki:Scribunto-doc-page-does-not-exist]]
|-
!rowspan=2|预览功能
|-
|rowspan=2|JS、 JSON、 CSS、 [[Help:模板样式|模板样式]]、 纯文本及其他
|rowspan=2|任何
|rowspan=2|[[AJAX]]：编辑框内容提交[[Special:ApiHelp/parse|API:parse]]
|-
!rowspan=2|已删内容预览
|-
|[[Lua]]
|Module
|[[AJAX]]：使用模板沙盒参数解析Lua
|-
!查看差异或历史版本<br/>（含修订版本删除）
|colspan=2|任何符合\_addText模式的页面
|[[AJAX]]：历史版本提交[[Special:ApiHelp/parse|API:parse]]
|}
{{Anchor|特殊页面放置方法}}
{{Special wikitext/放置方法}}
;{{tl|Special wikitext}}模板的功能：
{{Ombox
|type=notice
|image=[[File:Information Mark (Blue).svg|50px|alt=|link=]]
|text='''本模板{{red|不}}建议[[Help:替换引用|替换引用]]。'''模板使用了与[[Template:虚拟模板]]相关的技术，由于技术限制，替换引用后的结果可能会与预期不符。如需替换引用请使用{{tl|softsubst}}。
}}
{| class=wikitable
!功能
!你所输入的
!你所看到的
|-
!嵌入包含特殊页面中的<code>\_addText</code>
|<div class="mw-highlight mw-highlight-lang-moin mw-content-ltr mw-highlight-lines" dir="ltr">
{{#tag:span||class=linenos|data-line=1}}</span>{{((}}[[Template:Special wikitext|Special wikitext]]
{{#tag:span||class=linenos|data-line=2}}{{0| }}{{Background color|#edf6fd|2={{!}}preview=preview}}
{{#tag:span||class=linenos|data-line=3}}{{0| }}{{Background color|#ffdfc4|2={{!}}[[Template:Special wikitext/testcase.js|Special wikitext/testcase.js]]}}
{{#tag:span||class=linenos|data-line=4}}{{))}}

</div>
|{{Special wikitext|preview=preview|Special wikitext/testcase.js}}
|-
!rowspan=4|嵌入包含一个特殊页面
|嵌入[[Module:Module_wikitext/testcase]]：<br/>
<div class="mw-highlight mw-highlight-lang-moin mw-content-ltr mw-highlight-lines" dir="ltr">
 {{#tag:span||class=linenos|data-line=1}}</span>{{((}}[[Template:Special wikitext|Special wikitext]]
 {{#tag:span||class=linenos|data-line=2}}{{0| }}{{Background color|#ffdfc4|2={{!}}[[Module:Module wikitext/testcase]]}}
 {{#tag:span||class=linenos|data-line=3}}{{))}}
</div>
|{{Special wikitext|Module:Module wikitext/testcase}}
|-
|嵌入[[Template:Special wikitext/testcase.json]]：<br/>
<div class="mw-highlight mw-highlight-lang-moin mw-content-ltr mw-highlight-lines" dir="ltr">
 {{#tag:span||class=linenos|data-line=1}}</span>{{((}}[[Template:Special wikitext|Special wikitext]]
 {{#tag:span||class=linenos|data-line=2}}{{0| }}{{Background color|#ffdfc4|2={{!}}[[Template:Special wikitext/testcase.json|Special wikitext/testcase.json]]}}
 {{#tag:span||class=linenos|data-line=3}}{{))}}
</div>
|{{Special wikitext|Special wikitext/testcase.json}}
|-
|嵌入[[Template:Special wikitext/testcase.js]]：<br/>
<div class="mw-highlight mw-highlight-lang-moin mw-content-ltr mw-highlight-lines" dir="ltr">
 {{#tag:span||class=linenos|data-line=1}}</span>{{((}}[[Template:Special wikitext|Special wikitext]]
 {{#tag:span||class=linenos|data-line=2}}{{0| }}{{Background color|#ffdfc4|2={{!}}[[Template:Special wikitext/testcase.js|Special wikitext/testcase.js]]}}
 {{#tag:span||class=linenos|data-line=3}}{{))}}
</div>
|{{Special wikitext|Special wikitext/testcase.js}}
|-
|对比一般的嵌入方式<br/>[[Template:Special wikitext/testcase.js]]：<br/>
<div class="mw-highlight mw-highlight-lang-moin mw-content-ltr mw-highlight-lines" dir="ltr">
 {{#tag:span||class=linenos|data-line=1}}</span>{{((}}{{0| }}{{Background color|#ffdfc4|2=[[Template:Special wikitext/testcase.js|Special wikitext/testcase.js]]}}{{0| }}{{))}}
</div>
|{{Special wikitext/testcase.js}}
|-
!标记触发预览
|<div class="mw-highlight mw-highlight-lang-moin mw-content-ltr mw-highlight-lines" dir="ltr">
 {{#tag:span||class=linenos|data-line=1}}</span>{{((}}[[Template:Special wikitext|Special wikitext]]
 {{#tag:span||class=linenos|data-line=2}}{{0| }}{{Background color|#edf6fd|2={{!}}preview=js}}
 {{#tag:span||class=linenos|data-line=3}}{{0| }}{{Background color|#ffdfc4|2={{!}}[[Template:Special wikitext/testcase.js|Special wikitext/testcase.js]]}}
 {{#tag:span||class=linenos|data-line=4}}{{))}}
</div>
|{{Special wikitext|preview=js|Special wikitext/testcase.js}}
|-
!展示某个页面的源代码
|<div class="mw-highlight mw-highlight-lang-moin mw-content-ltr mw-highlight-lines" dir="ltr">
 {{#tag:span||class=linenos|data-line=1}}</span>{{((}}[[Template:Special wikitext|Special wikitext]]
 {{#tag:span||class=linenos|data-line=2}}{{0| }}{{Background color|#edf6fd|2={{!}}lang=wikitext}}
 {{#tag:span||class=linenos|data-line=3}}{{0| }}{{Background color|#ffdfc4|2={{!}}[[Template:Ifsubst|Ifsubst]]}}
 {{#tag:span||class=linenos|data-line=4}}{{))}}
</div>
|{{Special wikitext|Ifsubst|lang=wikitext}}
|}

== 参数说明 ==
;参数1：
要处理的特殊页面名称。若省略此参数则须提供源代码<code>src</code>参数。
;参数<code>src</code>：
要处理的特殊页面内容模型之源代码。若输入了此参数则参数1将会无效。
;参数<code>preview</code>：
决定特殊页面的展示模式。
{| class=wikitable
!模式名称
!代码
!功能
|-
!完整模式
||preview=<code>wiki</code>、<code>wikitext</code>
|同时展示<code>\_addText</code>与特殊页面源代码
|-
!代码模式
||preview=<code>code</code>
|仅展示特殊页面源代码
|-
!预览模式
||preview=<code>preview</code>
|仅展示<code>\_addText</code>
|-
!小工具预览模式
||preview=<code>js</code>、<code>ajax</code>
|展示特殊页面源代码，并向小工具请求发送预览。
|-
!默认模式
||''(未输入)''
|同完整模式，可当作特殊页面的嵌入包含。
|}
;模板功能与参数总表：
<templatedata>
{
"params": {
"1": {
"label": "页面名称",
"description": "要嵌入或读取\_addText内容的页面。如果省略此参数则需要加入源代码(src)参数。",
"type": "wiki-page-name"
},
"preview": {
"label": "预览模式",
"description": "控制输出的预览模式",
"type": "string"
},
"contentModel": {
"label": "页面内容模型",
"description": "以指定的页面内容模型来解析页面源代码。若省略则自动判断。",
"type": "string",
"aliases": [
"lang"
]
},
"src": {
"label": "源代码",
"description": "从指定的源代码中解析。(建议用<nowiki>包覆)",
"type": "content"
}
},
"description": "嵌入包含一个特殊页面内容模型之页面"
}
</templatedata>

== 子模板依赖关系图 ==
{{VT|code={{Tree chart/start}}
{{Tree chart| | | | | | | | | | | TT   | |  | | | | | | | | | | | |boxstyle=background:#dfd;}}
{{Tree chart| | |,|-|-|-|v|-|-|-|-|^| -|-| -|v|-|-|-|v|-|-|.| | | |}}
{{Tree chart| | DCS | | DPD | | | | |  | |  DP  | |DJSD | |!| | | |boxstyle=border:1px dashed;}}
{{Tree chart| | |!| | | |!| |F|~|~|~|~ |7|  |!| | | |!| | |!| |F|7|}}
{{Tree chart| | TCS | | | TPD | | | |  |:|  TP  | |TJSD | | TMT |:|boxstyle=background:#ddf;{{void|
            |    !         !            :    !       !           :|}}|boxstyle* TMT =background:#fed;}}
{{Tree chart| | |!| |,|-|-|^|-|-|.| |  |:| ,|^|.| |,|^|-|.| | | |:|LTXT|boxstyle_LTXT=border:none;}}
{{Tree chart| | | TC  | | | | | | TCN  |L|he| | TCD | | TGS | | |:|LGRE|boxstyle=background:#fff;{{void|
            |      !               !             !               :|}}|boxstyle* TGS =background:#fed;{{void|
            |      !               !             !               :|}}|boxstyle*LGRE=border-width:2px 2px 0 2px;{{void|
            |      !               !             !               :|}}background:#dfd;}}
{{Tree chart| |,|-|^|-|.| | | |,|-|+|- |.|  | | |!| | | | | | | |:|LBLU|boxstyle_LBLU=border-width:2px 2px 0 2px;{{void|
            |  !       !       !   !    !        !               :|}}background:#ddf;}}
{{Tree chart| TIN | | TIM | |  TM |!|  TMM |  |TJSON|~|CJSON| | |:|LYLW|boxstyle=background:#fff;{{void|
            |                      !             !               :|}}|boxstyle_TJSON=background:#ffd;{{void|
            |                      !             !               :|}}|boxstyle* TM =background:#fed;{{void|
            |                      !             !               :|}}|boxstyle* TMM =background:#fed;{{void|
            |                      !             !               :|}}|boxstyle_CJSON=border:1px dashed;{{void|
            |                      !             !               :|}}background:inherit;{{void|
            |                      !             !               :|}}|boxstyle_LYLW=border-width:2px 2px 0 2px;{{void|
            |                      !             !               :|}}background:#ffd;}}
{{Tree chart| | | | | | | | | | | |!|  | |  |,|-|^|-|.| | | | | |:|LORG|boxstyle_LORG=border-width:2px 2px 0 2px;{{void|
            |                      !         !       !           :|}}background:#fed;}}
{{Tree chart| | |TTSCS|~| TTSC| | |!|  | |  TMJ | |JCSS | | | | |:|LGRA|boxstyle=background:#fff;{{void|
            |              !       !                             :|}}|boxstyle* TMJ =background:#fed;{{void|
            |              !       !                             :|}}|boxstyle*TTSCS=background:#ddd;{{void|
            |              !       !                             :|}}|boxstyle* TTSC=background:#ddd;{{void|
            |              !       !                             :|}}|boxstyle*LGRA=border-width:2px 2px 0 2px;{{void|
            |              !       !                             :|}}background:#ddd;}}
{{Tree chart| | | | | |,|-|^|-|.| |fh|~|~| ~|~|~|~|~|~|~|~|~|~|~|J|LWHI|boxstyle=background:#fff;}}
{{Tree chart| | | | | TT1 | | TCS | | | | | | | | | | | | | | | |boxstyle* TT1 =background:#dfd;{{void|
                                                                   }}|boxstyle\_ TCS =background:#ddf;}}
{{Tree chart/end}}|CJSON=渲染JSON
|LTXT={{nowrap|'''图例'''}}
|LGRE={{nowrap|模板本身}}
|LYLW={{nowrap|1=<span style="font-size:0.75em;">可外部调用</span>}}
|LBLU={{nowrap|主要模板}}
|LORG={{nowrap|依赖模块}}
|LGRA={{nowrap|测试样例}}
|LWHI={{nowrap|内部模板}}
|DCS=展示代码|DPD=展示<code>\_addText</code>|DP=展示特殊页面|DJSD=请求预览
|TT=[[Template:Special wikitext|Special wikitext]]|TT1=[[Template:Special wikitext#top|Template:#]]
|TCS=[[Template:Special wikitext/codeshow|#/codeshow]]
|TPD=[[Template:Special wikitext/previewdisplay|#/previewdisplay]]
|TP=[[Template:Special wikitext/preview|#/preview]]
|TJSD=[[Template:Special wikitext/jspreview|#/jspreview]]
|TMT=[[Module:Special wikitext/Template|Module:#/Template]]
|TMM=[[Module:Module wikitext|Module wikitext]]
|TC=[[Template:Special wikitext/code|#/code]]
|TCN=[[Template:Special wikitext/content|#/content]]
|TCD=[[Template:Special wikitext/codedisplay|#/codedisplay]]
|TGS=[[MediaWiki:Gadget-SpecialWikitext.js|Gadget:#.js]]
|TIN=[[Template:Special wikitext/include|#/include]]
|TIM=[[Template:Special wikitext/immcode|#/immcode]]
|TM=[[Module:Special wikitext|Module:#]]
|TJSON=[[Template:Special wikitext/JSON|#/JSON]]
|TTSCS=[[Template:Special wikitext/testcases|#/testcases]]
|TTSC=[[Template:Special wikitext/testcase|#/testcase]]
|TMJ=[[Module:Special wikitext/JSON|Module:#/JSON]]
|JCSS=[[Template:Special wikitext/JSON.css|#/JSON.css]]
}}

<includeonly>{{Sandbox other||<!-- 本行下加入模板的分类 -->

}}</includeonly>
