import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="空调网首页" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        padding: 20,
        border: '1px solid #dfdfdf'
      }}
      className="clearfix"
    >
      <div
        className="fl"
        style={{
          width: '70%'
        }}
      >
        <p
          style={{
            marginBottom: 15
          }}
          title="空调（Air Conditioner通常称为AC，A/C）"
        >
          <strong
            style={{
              textShadow: 'rgb(221, 221, 221) 2px 2px 0px'
            }}
          >
            空调（Air Conditioner通常称为AC，A/C）
          </strong>
        </p>
        <p
          style={{
            marginBottom: 15,
            textIndent: '2em',
            fontSize: 16
          }}
        >
          空调是从所在空间内部去除热量和水分的过程，以
          <strong>提高空间内部的舒适度</strong>
          。空调可用于家庭和商业环境。该过程最常用于人类和其他动物获得更舒适的内部环境；然而，空调也用于
          <strong>冷却/除湿</strong>
          充满发热电子设备的房间，例如计算机服务器、功率放大器机房，甚至用于辅助展示和存储一些精美的产品，例如艺术品。
        </p>
        <p
          style={{
            marginBottom: 15,
            textIndent: '2em',
            fontSize: 16
          }}
        >
          空调通常
          <strong>
            使用风扇将经调节的空气传输分配到诸如建筑物或汽车的内部空间中以改善热舒适性和室内空气质量
          </strong>
          。<strong>基于电动制冷剂的空调</strong>
          包括用于小卧室的小型号的冷却系统，和安装在办公大楼屋顶上的可以冷却整个建筑物的大型冷却系统。冷却通常通过
          <strong>制冷循环</strong>实现，但也有时使用
          <strong>蒸发或自由冷却</strong>。空调系统也可以基于
          <strong>干燥剂</strong>
          （从空气中去除水分的化学品）制成。一些空调系统会在地下管道中排出或储存热量。
        </p>
        <p
          style={{
            marginBottom: 15,
            textIndent: '2em',
            fontSize: 16
          }}
        >
          在最一般意义上，空调可以指任何形式的技术，其
          <strong>
            改变空气的状况（加热，（去）加湿，冷却，清洁，通风或空气运动）
          </strong>
          。然而，在通常的使用中，“空调”是指冷却空气的系统。在建筑中，一个完整的
          <strong>供暖、通风和空调系统</strong>被称为HVAC。
        </p>
      </div>
      <div
        className="fr"
        style={{
          width: '28%'
        }}
      >
        <img
          src="/images/acp.jpg"
          alt="空调（Air Conditioner通常称为AC，A/C）"
          title="空调（Air Conditioner通常称为AC，A/C）"
        />
      </div>
    </div>
    <ul
      className="index-nav-list clearfix"
      style={{
        display: 'block',
        marginTop: 15,
        backgroundColor: '#efefef'
      }}
      id="index-nav-list"
    >
      <li>
        <a rel="nofollow" href="#ac-history" title="空调的发展历史">
          空调的发展历史
        </a>
      </li>
      <li>
        <a
          rel="nofollow"
          href="#ac-operating-principles"
          title="空调的工作原理"
        >
          空调的工作原理
        </a>
      </li>
      <li>
        <a rel="nofollow" href="#ac-types" title="空调种类">
          空调种类
        </a>
      </li>
      <li>
        <a rel="nofollow" href="#ac-health-effects" title="空调对健康影响">
          空调对健康影响
        </a>
      </li>
      <li>
        <a rel="nofollow" href="#ac-brand" title="A4纸哪个品牌好">
          A4纸哪个品牌好
        </a>
      </li>
    </ul>
    <div style={{ margin: '15px 0', fontSize: 16 }}>
      <dl className="clearfix">
        <dt id="ac-history" title="空调的发展历史">
          ① 空调的发展历史
        </dt>
        <dd>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            蒸发冷却
          </h3>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            从史前时代开始，冰雪就被用来降温。在冬季收获冰和在夏季储存的业务在17世纪末开始流行。这种做法被机械制冰机所取代。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            据说空调背后的基本概念已应用于古埃及，芦苇悬挂在窗户中，并用涓涓的水润湿。水的蒸发冷却了吹过窗户的空气。这个过程也使空气更加潮湿，这在干燥的沙漠气候中是有益的。中世纪波斯的其他技术涉及在炎热季节使用蓄水池和风塔来冷却建筑物。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            汉代的2世纪中国机械工程师和发明家丁焕发明了一种空调旋转风扇，其中七个轮子的直径为3米（10英尺），由当时的囚犯手动驱动。[6]
            747年，唐朝皇帝玄宗（712-762）（618-907）在皇宫内建有凉堂（梁殿凉殿），唐玉林称这里有水力风扇轮。空调以及来自喷泉的喷射水流。在随后的宋朝（960-1279），书面消息来源提到空调旋转风扇更广泛使用。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            在17世纪，荷兰发明家科内利斯·德雷贝尔（Cornelis
            Drebbel）通过在水中添加盐，向英格兰的詹姆斯一世（James I of
            England）展示了“将夏季变为冬季”作为现代空调的早期形式。
          </p>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            机械冷却的发展
          </h3>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            美国佛罗里达州约翰戈里州立博物馆的Gorrie制冰机的四分之三比例模型
            现代空调从19世纪化学的进步中浮现出来，第一台大型电气空调于1902年由美国发明家威利斯·卡里尔发明并使用。
            20世纪20年代引入的住宅空调有助于大规模应用到美国的太阳带的地区。[需要引证]
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            1758年，剑桥大学化学教授本杰明富兰克林和约翰哈德利进行了一项实验，探索蒸发原理，以此作为快速冷却物体的手段。富兰克林和哈德利证实，高挥发性液体（如酒精和乙醚）的蒸发可用于降低物体的温度超过水的冰点。他们用水银温度计的灯泡作为对象进行了实验，并使用波纹管加速蒸发。他们将温度计灯泡的温度降至-14°C（7°F），而环境温度为18°C（64°F）。富兰克林指出，在他们超过0°C（32°F）的冰点后不久，温度计灯泡表面形成一层冰膜，冰块大约为6毫米（1/4英寸）当它们在达到-14°C（7°F）时停止实验时会变厚。富兰克林得出结论：“从这个实验中，人们可能会看到在一个温暖的夏日将男人冻死的可能性。”
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            1820年，英国科学家和发明家Michael
            Faraday发现，当液化氨蒸发时，压缩和液化氨会使空气冷却。
            1842年，佛罗里达州的医生John
            Gorrie使用压缩机技术制造冰，用于在佛罗里达州Apalachicola的医院为患者冷却空气。他希望最终能用他的制冰机来调节建筑物的温度。他甚至设想了可以为整个城市降温的集中式空调。虽然他的原型泄露并且不规则地进行，但Gorrie在1851年获得了他的制冰机专利。尽管他的工艺改进了冰的人工生产，但是当他的主要财政支持者去世并且Gorrie没有获得开发机器所需的资金时，他的成功希望很快就消失了。据他的传记作者维维安·M·夏洛克（Vivian
            M. Sherlock）说，他指责“冰王”弗雷德里克·都铎（Frederic
            Tudor）的失败，怀疑都铎（Tudor）发动了一次针对他的发明的诽谤运动。
            Gorrie博士在1855年死于贫困，普通空调的梦想消失了50年。[需要引证]
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            詹姆斯哈里森的第一台机械制冰机于1851年在澳大利亚吉朗Rocky
            Point的Barwon河岸开始运营。他的第一台商用制冰机于1853年推出，他的专利是乙醚蒸气压缩制冷系统于1855年获得批准。这种新型系统使用压缩机迫使制冷气体通过冷凝器，冷凝器在那里冷却并液化。然后液化气体循环通过制冷盘管并再次蒸发，冷却周围系统。这台机器每天产生3,000千克（6,600磅）的冰。[需要引证]
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            虽然哈里森在1860年在悉尼成功建立了第二家冰冻公司，但后来他进入了关于如何与美国冰冷牛肉销售到英国的优势竞争的辩论。他写道：“新鲜的肉类冷冻和包装好像是为了航行，因此制冷过程可以持续任何所需的时间”，并于1873年准备了诺福克号帆船运送到英国的实验性牛肉。当冰的消耗速度超过预期时，他​​选择冷藏室系统而不是在船上安装制冷系统本身就是灾难性的。[需要引证]
          </p>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            电气空调（主要在美国发展起来）
          </h3>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            1902年，第一台现代电气空调机组由Willis
            Carrier在纽约布法罗发明。[需要引证]从康奈尔大学毕业后，Carrier在Buffalo
            Forge公司找到了一份工作。在那里，他开始尝试使用空调作为解决纽约布鲁克林Sackett-Wilhelms石版印刷和出版公司应用问题的一种方法。由Carrier设计和建造的第一台空调于1902年7月17日开始工作。[需要引证]
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            Carrier的发明旨在改善印刷厂的制造过程控制，不仅控制温度，还控制湿度。
            Carrier利用他对蒸汽加热物体的知识并改变了这个过程。他没有通过热线圈送风，而是通过冷线圈（装满冷水）送出。空气被冷却，从而可以控制空气中的水分量，从而使室内的湿度可控。受控的温度和湿度有助于保持一致的纸张尺寸和墨水对齐。后来，Carrier的技术被用于提高工作场所的生产率，美国开利空调公司的成立是为了满足不断增长的需求。随着时间的推移，空调开始被用于改善家庭和汽车的舒适度。住宅销售在20世纪50年代急剧扩大。[需要引证]
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            1906年，夏洛特的Stuart W.
            Cramer正在探索在纺织厂为空气添加水分的方法。克莱默创造了“空调”一词，在他当年提出的专利权利要求中使用它作为“水调节”的类似物，然后是一种使纺织品更容易加工的众所周知的方法。他将水分与通风结合起来“调节”并改变工厂的空气，控制纺织厂必要的湿度。
            Willis Carrier采用了该术语并将其纳入其公司名称。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            此后不久，第一个拥有空调的私人住宅于1914年在明尼阿波利斯建造，由查尔斯盖茨拥有。意识到有一天空调将成为私人住宅的标准特征，特别是在气候变暖的地区，David
            St. Pierre
            DuBose（1898-1994）为他的家Meadowmont设计了管道系统和通风口网络，所有这些都伪装成复杂而迷人的格鲁吉亚风格的开放式造型。[什么时候？]这座建筑被认为是美国首批配备中央空调的私人住宅之一。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            1945年，马萨诸塞州林恩市的罗伯特谢尔曼发明了一种便携式窗内空调，可对空气进行冷却，加热，加湿，除湿和过滤。
          </p>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            制冷剂开发
          </h3>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            现代R-134a密封制冷压缩机
            第一台空调和冰箱使用有毒或易燃气体，如氨，甲基氯或丙烷，当它们泄漏时可能导致致命事故。
            Thomas
            Midgley，Jr。于1928年创建了第一种非易燃，无毒的氯氟烃气体氟利昂。该名称是杜邦拥有的任何氯氟烃（CFC），氢氯氟烃（HCFC）或氢氟烃（HFC）制冷剂的商标名称。制冷剂名称包括表示分子组成的数字（例如，R-11，R-12，R-22，R-134A）。最常用于直接膨胀住宅和建筑舒适冷却的混合物是称为氯二氟甲烷（R-22）的HCFC。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            二氯二氟甲烷（R-1​​2）是美国汽车中最常用的混合物，直到1994年，由于R-12的臭氧消耗潜能，大多数设计改为R-134A。
            R-11和R-12在美国不再为此类应用制造，但仍然是进口的，可以由经过认证的HVAC技术人员购买和使用。对于仅需要偶尔“射击”R-12并且处于良好工作状态并且表现远远优于几乎所有“R-134a”系统的系统，无论是“转换”还是“工厂”，甚至每磅R-
            $ 50- $ 100- 12被许多人认为是“便宜的”。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            现代制冷剂的开发比二十世纪早期和二十世纪中期使用的许多早期基于氯氟烃的制冷剂更加环保。其中包括HCFC（R-22，2011年以前大多数美国家庭使用）和HFC（R-134a，大多数汽车使用）已取代大多数CFC使用。反过来，据称氟氯烃正在根据“蒙特利尔议定书”逐步淘汰，并被缺少氯的R-410A等氢氟碳化合物取代。然而，氢氟碳化合物会导致气候变化问题。此外，企业高管的政策和政治影响力抵制变革。公司坚持认为不存在氢氟碳化合物的替代品。环保组织绿色和平组织为一家前东德冰箱公司提供资金，以便在1992年研究替代的臭氧和气候安全制冷剂。该公司开发了异戊烷和异丁烷的碳氢化合物混合物，但作为与绿色和平合同的条件不能申请专利这项技术引起了其他公司的广泛采用。他们首先在德国的活动营销导致像惠而浦，博世和后来的LG等公司将这项技术整合到整个欧洲，然后是亚洲，尽管企业高管在拉丁美洲的企业中抵制，因此，它于2003年由一家国内公司运抵阿根廷，最后于2004年博世家电在巴西生产。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            1995年，德国制造的氟氯化碳冰箱非法。杜邦和其他公司用美国环保署封锁了德国在美国使用的制冷剂，使用了贬低了“德国技术”的做法。然而，2004年，绿色和平组织与可口可乐和联合利华等跨国公司以及后来的百事可乐和其他公司合作创建一个名为Refrigerants
            Naturally的企业联盟！然后，四年后，联合利华和通用电气的Ben＆Jerry开始采取措施支持美国的生产和使用。2011年，EPA决定采用臭氧和气候安全制冷剂用于美国制造。
          </p>
        </dd>
        <dt id="ac-operating-principles">② 空调的工作原理</dt>
        <dd>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            循环制冷
          </h3>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            制冷循环的简单程式化图：1）冷凝盘管，2）膨胀阀，3）蒸发器盘管，4）压缩机
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            毛细管膨胀阀连接到蒸发器入口。注意结霜。使用蒸汽压缩循环实现传统AC系统中的冷却，该循环利用气体和液体之间的制冷剂的强制循环和相变来传递热量。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            蒸汽压缩循环可以在整体或包装的设备中进行；或者在冷凝器内连接到其蒸发器侧的终端冷却设备（例如可变制冷剂流动终端或风机盘管单元）和冷凝器侧的排热设备。
          </p>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            蒸发冷却
          </h3>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            蒸发冷却器。在非常干燥的气候中，蒸发冷却器（有时称为沼泽冷却器或沙漠冷却器）在炎热天气中用于改善凉爽。蒸发冷却器是一种通过湿垫吸入外部空气的装置，例如浸泡在水中的大海绵。通过干球温度计测量的进入空气的显热减少。进入的空气温度降低，但也更潮湿，因此总热量（显热加潜热）不变。通过湿式冷却器垫中的水蒸发，一些进入的空气的显热被转换成潜热。如果进入的空气足够干燥，结果可能非常大。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            蒸发冷却器往往感觉好像在高湿度时没有工作，当干燥空气不多时冷却器可以使空气尽可能冷却住宅居住者。与其他类型的空调不同，蒸发冷却器依靠外部空气通过较冷的垫子引导，冷却垫在空气通过其风道系统到达房屋内部之前对其进行冷却。必须允许这种冷却的外部空气通过诸如敞开的门或窗户之类的排气口将房屋内的温暖空气推出。这些冷却器成本更低，机械上易于理解和维护。
          </p>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            自由冷却
          </h3>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            空调也可以通过一种称为自由冷却的过程来提供，该过程使用泵来循环冷却剂，例如空气，水或来自冷源的水
            -
            乙二醇混合物，冷却源又作为散热器用于去除能量。从冷却的空间。常见的存储介质是凉爽的外部空气，深层含水层，或通过一系列小直径钻孔进入的天然地下岩体。一些具有小存储容量的系统是混合系统，在冷却季节的早期使用自由冷却，然后使用热泵来冷却来自存储器的循环。添加热泵是因为在冷却季节期间储存器的温度逐渐升高，从而降低其有效性。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            自由冷却系统可以具有非常高的效率，并且有时与季节性热能储存（STES）相结合，因此冬天的寒冷可以用于夏季空调。自然冷却和混合系统是成熟的技术。
          </p>
        </dd>
        <dt id="ac-types">③ 空调种类</dt>
        <dd>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            家用空调的种类分为很多种，其中常见的包括挂壁式空调、立柜式空调
            、窗式空调和吊顶式空调，但是这些产品各有特点，价格也各不相同，要根据自己的需求来挑选。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            家用空调分为以下4种：
          </p>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            挂壁式空调
          </h3>
          <img src={'/images/ac1.jpg'} alt="挂壁式空调" title="挂壁式空调" />
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            挂壁式空调广受大家欢迎，技术也在不断革新。
            您应注意比较各品牌的功能区别。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            换气功能是最新运用在挂壁式空调的技术，保证家里有新鲜空气，防止空调病的产生，使用起来更舒适，更合理。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            此外，静音和节能设计也很重要，能让您安睡到天明。有的挂壁式空调具有超小室外机，如果打算把室外机放在阳台，这也是很好的选择。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            至于冷暖型的挂壁式空调，要注意选择制热量大于制冷量的空调，以确保制热效果。如果有电辅热加热功能，就能保证在超低温环境下（最低-10摄氏度）也能制热（出风口温度40摄氏度以上）。
          </p>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            立柜式空调
          </h3>
          <img src={'/images/ac2.jpg'} alt="立柜式空调" title="立柜式空调" />
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            要调节大范围空间的气温，比如大客厅或商业场所，立柜式空调最合适。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            在选择时应注意是否有负离子发送功能，因为这能清新空气，保证健康。而有的立柜式空调具有模式锁定功能，运行状况由机主掌握，对商业场所或家中有小孩的家庭会比较有用，可避免不必要的损害。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            另外，送风范围是否够远够广也很重要。立柜式空调送风的最远距离可大于15米，再加上广角送风，可兼顾更大的面积。
          </p>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            窗式空调
          </h3>
          <img src={'/images/ac3.jpg'} alt="窗式空调" title="窗式空调" />
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            安装方便，价格便宜，适合小房间。在选择时要注意其静音设计，因为窗机通常较分体空调噪音大，所以选择接近分体空调的噪音标准的窗机好一些。除了传统的窗式空调外，还有新颖的款式，比如专为孩子设计的彩色面板儿童机，带有语音提示，既活泼又实用安全，也是不错的选择。
          </p>
          <h3
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            吊顶式空调
          </h3>
          <img src={'/images/ac4.jpg'} alt="吊顶式空调" title="吊顶式空调" />
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            创新的空调设计意念，室内机吊装在天花上，四面广角送风，调温迅速，更不会影响室内装修。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            根据空调功能，可以将空调分为单冷式空调和冷暖式空调。单冷式空调：不具有制热功能，适用于夏天较热或冬天有充足暖气供应的地区。冷暖式空调：具有制热功能。
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            根据其制热方式又可分为热泵型和电辅助加热型。热泵型适用于夏季炎热、冬季较冷的地区；电辅助加热型因加了电辅助加热部件，制热强劲，所以适用于夏季炎热，冬季寒冷的地区
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            以上各种空调还可按调温情况分为：单冷型：仅用于制冷，适用于夏季较暖或冬季供热充足地区。冷暖型：具有制热，制冷功能，适用于夏季炎热，冬季寒冷地区。电辅助加热型：电辅助加热功能一般只应用于大功率柜式空调，机身内增加了电辅助加热部件，确保冬季制热强劲。不过，在冬季供暖比较充足的北方地区似乎并无必要。
          </p>
        </dd>
        <dt id="ac-health-effects">④ 空调对健康影响</dt>
        <dd>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            在炎热的天气，空调可以预防中暑，过度出汗引起的脱水和其他与体温过高有关的问题。热浪是发达国家最致命的天气现象。空调（包括过滤，加湿，冷却和消毒）可用于在医院手术室和其他适当的气氛对患者安全和健康至关重要的环境中提供清洁，安全，低过敏性气氛。有时建议过敏的人在家中使用。[需要引证]
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20, textIndent: '2em' }}>
            维护不善的水冷却塔可以促进微生物的生长和传播，例如嗜肺军团菌（Legionella
            pneumophila），这是导致军团病的传染因子。只要冷却塔保持清洁（通常通过氯处理），就可以避免或减少这些健康危害。
          </p>
        </dd>
        <dt id="ac-brand">⑤ A4纸哪个品牌好</dt>
        <dd>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/U41HoUw"
                rel="nofollow"
                target="_blank"
              >
                佳印
              </a>
              -UPM
              <a
                href="https://s.click.taobao.com/L75HoUw"
                rel="nofollow"
                target="_blank"
              >
                欣乐
              </a>
            </strong>
            (芬欧汇川旗下，芬欧汇川(常熟)纸业有限公司 十佳复印纸/打印纸品牌)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              旗舰-
              <a
                href="https://s.click.taobao.com/A52HoUw"
                rel="nofollow"
                target="_blank"
              >
                小钢炮
              </a>
              -
              <a
                href="https://s.click.taobao.com/Dh9HoUw"
                rel="nofollow"
                target="_blank"
              >
                金旗舰
              </a>
            </strong>
            (新加坡APP金光集团旗下，亚龙昆山纸业,十佳复印纸品牌)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/NDAHoUw"
                rel="nofollow"
                target="_blank"
              >
                Double A
              </a>
            </strong>
            (泰国曼谷亿王亚哥集团，东南亚著名造纸品牌)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/Uh8HoUw"
                rel="nofollow"
                target="_blank"
              >
                幸运鸟
              </a>
            </strong>
            (新加坡APP金光集团旗下，金华盛纸业（苏州工业园区）有限公司，十佳复印纸/打印纸品牌)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/aO7HoUw"
                rel="nofollow"
                target="_blank"
              >
                金太阳
              </a>
              -
              <a
                href="https://s.click.taobao.com/Qn3CoUw"
                rel="nofollow"
                target="_blank"
              >
                威尔
              </a>
            </strong>
            (山东太阳纸业股份有限公司/兖州枫叶纸业，十佳复印纸品牌)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/Dd5HoUw"
                rel="nofollow"
                target="_blank"
              >
                百旺
              </a>
              -
              <a
                href="https://s.click.taobao.com/YO7HoUw"
                rel="nofollow"
                target="_blank"
              >
                高品乐
              </a>
            </strong>
            (新加坡金鹰国际集团广东亚太纸业，十佳复印纸品牌)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/Wx9HoUw"
                rel="nofollow"
                target="_blank"
              >
                史泰博(Staples)
              </a>
            </strong>
            (世界500强美国企业)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/Bv7HoUw"
                rel="nofollow"
                target="_blank"
              >
                Deli/得力
              </a>
            </strong>
            (中国驰名商标、中国文具百环奖、办公文具行业领导品牌)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/Y41HoUw"
                rel="nofollow"
                target="_blank"
              >
                Comix/齐心
              </a>
            </strong>
            (中国最大的办公用品集团之一)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/Bp0HoUw"
                rel="nofollow"
                target="_blank"
              >
                M＆G/晨光
              </a>
            </strong>
            (中国文具十大品牌)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/lhrBoUw"
                rel="nofollow"
                target="_blank"
              >
                天章(TANGO)
              </a>
            </strong>
            (天章“TANGO”、“世纪天章”、“天章龙”品牌复印纸获得了国家环境保护部授权的“中国环境标志产品认证
            证书”)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/XDAHoUw"
                rel="nofollow"
                target="_blank"
              >
                永丰
              </a>
            </strong>
            (中国驰名商标，四川永丰纸业股份有限公司，十佳复印纸品牌)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/NO6HoUw"
                rel="nofollow"
                target="_blank"
              >
                安妮
              </a>
            </strong>
            (厦门安妮股份有限公司 股票代码：002235，下称“安妮股份”)
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/Oh8HoUw"
                rel="nofollow"
                target="_blank"
              >
                金丝雀
              </a>
            </strong>
            (新加坡APP金光集团旗下，金鑫(清远)纸业有限公司）
          </p>
          <p style={{ marginTop: 15, paddingLeft: 20 }}>
            <strong>
              <a
                href="https://s.click.taobao.com/qTAHoUw"
                rel="nofollow"
                target="_blank"
              >
                王子
              </a>
            </strong>
            (日本王子制纸集团，十佳复印纸/打印纸品牌)
          </p>
        </dd>
      </dl>
    </div>
  </Layout>
)

export default IndexPage
