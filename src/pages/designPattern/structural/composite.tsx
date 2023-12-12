/**
 * @format
 * @description 组合模式
 */

// 抽象构件
abstract class Component {
  abstract operation(): void;
}

// 树枝构建
class Composite extends Component {
  componentList = new Set<Component>([]);
  operation(): void {
    console.log(this.componentList);
  }
  add(component: Component): void {
    this.componentList.add(component);
  }
  remove(component: Component) {
    console.log(component);
    this.componentList.delete(component);
  }
  getChildren() {
    return this.componentList;
  }
}

// 叶子构件
class Leaf extends Component {
  operation(): void {
    console.log("执行叶子节点，最基本的处理");
  }
}

const showTree = (composite: Component) => {
  if (composite instanceof Composite) {
    composite.getChildren().forEach((c: Component) => {
      if (c instanceof Leaf) {
        c.operation();
      } else {
        showTree(c);
      }
    });
  }
};

export const compositeClient = () => {
  const root = new Composite();
  const branch = new Composite();
  const leaf = new Leaf();
  root.add(branch);
  branch.add(leaf);
  showTree(root);
};

/**
 * @description 以电商发放优惠券为例，实践使用组合模式
 * @description 对不同的性别、年龄段、婚姻状况的人群发放优惠券，
 */
// 抽象类
abstract class CouponComponent {
  value: string = "";
  abstract operation(): number;
  componentMap = new Map<string, CouponComponent>();
  getChildren() {
    return this.componentMap;
  }
}
abstract class CouponLeafComponent extends CouponComponent {}
// 分类树枝
class CategorizeComposite extends CouponComponent {
  componentMap = new Map<string, CouponComponent>();
  operation(): number {
    return 0;
  }
  add(key: string, component: CouponComponent): void {
    this.componentMap.set(key, component);
  }
  remove(key: string) {
    this.componentMap.delete(key);
  }
  getComponent(key: string) {
    return this.componentMap.get(key);
  }
  getChildren() {
    return this.componentMap;
  }
}

class MaleComposite extends CouponLeafComponent {
  value: string = "male";
  operation(): number {
    return 10;
  }
}
class FeMaleComposite extends CouponLeafComponent {
  value: string = "female";
  operation(): number {
    return 20;
  }
}

class MarriedComposite extends CouponLeafComponent {
  value: string = "married";
  operation(): number {
    return 8;
  }
}
class SingleComposite extends CouponLeafComponent {
  value: string = "single";
  operation(): number {
    return 2;
  }
}
class LoveComposite extends CouponLeafComponent {
  value: string = "love";
  operation(): number {
    return 80;
  }
}

const couponTreeCount = (
  root: CouponComponent,
  strategies: string[],
  results: number[]
) => {
  if (root instanceof CouponLeafComponent && strategies.includes(root.value)) {
    results.push(root.operation());
  } else {
    for (const item of root.getChildren().values()) {
      couponTreeCount(item, strategies, results);
    }
  }
};

export const couponClient = () => {
  const root = new CategorizeComposite();
  /* 性别树枝 start */
  const sexBranch = new CategorizeComposite();
  const maleLeaf = new MaleComposite();
  const femaleLeaf = new FeMaleComposite();
  sexBranch.add("male", maleLeaf);
  sexBranch.add("femal", femaleLeaf);
  root.add("sex", sexBranch);
  /* 性别树枝 end */
  /* 婚姻状况树枝 start */
  const marriageBranch = new CategorizeComposite();
  const marriedLeaf = new MarriedComposite();
  const singleLeaf = new SingleComposite();
  const loveLeaf = new LoveComposite();
  marriageBranch.add("married", marriedLeaf);
  marriageBranch.add("single", singleLeaf);
  marriageBranch.add("love", loveLeaf);
  root.add("marriage", marriageBranch);
  /* 婚姻树枝 end */
  const strategyCombination = ["male", "single"];
  const results: number[] = [];
  couponTreeCount(root, strategyCombination, results);
  console.log(
    100 +
      results.reduce((prev, cur) => {
        return prev + cur;
      })
  );
};
