/** @format */

interface IPage {
  appendWrapper(tagType: string, desc: string): string;
}
class Page implements IPage {
  content: string = "";
  appendWrapper(tagType: string, desc: string): string {
    return `
    <!-- ${desc} -->
    <${tagType}>
      <!-- 创建包裹内容的标签类型： ${tagType} -->
      ${this.content}
    </${tagType}>
    `;
  }
}

class PanelPage extends Page {
  appendContent(content: string) {
    this.content = content;
    return this;
  }
  render() {
    return this.appendWrapper("div", "创建一个面板的模板");
  }
}

type formItemType = {
  labelType: "Input" | "Select" | "InputNumber";
};
class FormPage extends Page {
  appendContent(content: formItemType[]) {
    const formItems: string[] = content.map((item) => {
      return `
      <Form.Item>
        <${item.labelType} />
      </Form.Item>
      `;
    });
    this.content = `
    <Form>
    ${formItems.join("")}
    </Form>
    `;
  }
  render() {
    return this.appendWrapper("PageWrapper", "创建一个页面表单的模板");
  }
}

// TODO: 脚手架创建模板，可以实践建造者模式
export class PageBuilder {
  buildPanel(content: string) {
    const panelpage = new PanelPage();
    panelpage.appendContent(content);
    return panelpage.render();
  }
  buildForm(content: formItemType[]) {
    const form = new FormPage();
    form.appendContent(content);
    return form.render();
  }
}
