"use client";

import { useState, useRef, useEffect } from "react";
import PageHero from "../components/PageHero";
import { ChevronDown, BookOpen } from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";

interface Doctrine {
  title: string;
  ref: string;
  body: string;
}

interface GospelSection {
  number: string;
  title: string;
  refs: string[];
  body: string;
}

interface GospelTab {
  id: string;
  label: string;
  shortLabel: string;
  sections: GospelSection[];
}

// ── Core doctrine cards (unchanged content) ──────────────────────────────────
const doctrines: Doctrine[] = [
  {
    title: "The Holy Scriptures",
    ref: "2 Timothy 3:16–17 · 2 Peter 1:20–21",
    body: `We believe the Bible — both the Old and New Testaments — is the inspired, infallible, and authoritative Word of God. It is the supreme standard for all Christian faith, doctrine, and practice. Scripture is God-breathed and profitable for doctrine, reproof, correction, and instruction in righteousness.`,
  },
  {
    title: "The Trinity",
    ref: "Matthew 28:19 · 2 Corinthians 13:14",
    body: `We believe in one God, eternally existent in three Persons: God the Father, God the Son (Jesus Christ), and God the Holy Spirit. Each Person is fully God, co-equal, co-eternal, and co-existent — one in essence, distinct in Person and function.`,
  },
  {
    title: "The Father",
    ref: "Ephesians 1:3 · Romans 8:15",
    body: `We believe in God the Father, the eternal, sovereign Creator and Sustainer of all things. He is infinitely holy, just, and merciful, and He rightly governs the universe with perfect wisdom. Through faith in Christ, He graciously adopts believers as His children, granting them intimate fellowship, divine provision, and an eternal inheritance.`,
  },
  {
    title: "The Son",
    ref: "John 1:1–14 · Philippians 2:5–11",
    body: `We believe in the deity of our Lord Jesus Christ — His virgin birth, His sinless life, His miracles, His atoning death on the cross, His bodily resurrection, His ascension to the right hand of the Father, and His personal, visible return in power and glory.`,
  },
  {
    title: "The Holy Spirit",
    ref: "Acts 2:1–4 · John 14:16–17",
    body: `We believe in the present-day ministry of the Holy Spirit, who indwells every believer at salvation and empowers them for holy living and effective service. We affirm the gifts of the Holy Spirit as active and available to the Church today for the edification of the Body of Christ.`,
  },
  {
    title: "Salvation by Grace Through Faith",
    ref: "Ephesians 2:8–9 · Romans 10:9–10",
    body: `We believe that humanity, fallen in sin, can only be reconciled to God through repentance and faith in the Lord Jesus Christ. Salvation is not earned by works but is a gift of God's grace, received through faith. Every born-again believer is justified, regenerated, and sealed by the Holy Spirit.`,
  },
  {
    title: "The Church",
    ref: "Matthew 16:18 · Ephesians 4:11–16",
    body: `We believe in the universal Church — the Body of Christ — comprising all who have been born again by the Spirit of God. We also affirm the importance of the local church as God's primary vehicle for discipleship, worship, fellowship, and world evangelism.`,
  },
  {
    title: "The Second Coming of Christ",
    ref: "Acts 1:11 · 1 Thessalonians 4:16–17",
    body: `We believe in the personal, visible, and glorious return of the Lord Jesus Christ to establish His Kingdom. This blessed hope is an anchor for the believer's soul and a motivation for righteous living and fervent evangelism.`,
  },
  {
    title: "Resurrection & Eternal Life",
    ref: "John 11:25–26 · Revelation 20:11–15",
    body: `We believe in the bodily resurrection of the dead — the saved unto eternal life, and the unsaved unto eternal judgment. Heaven and Hell are real places, and every human soul will spend eternity in one or the other based on their response to the Gospel.`,
  },
];

// ── Full Gospel exposition data ───────────────────────────────────────────────
const gospelTabs: GospelTab[] = [
  {
    id: "content",
    label: "The Content of the Gospel",
    shortLabel: "Content",
    sections: [
      {
        number: "1",
        title: "The Person of Jesus Christ",
        refs: ["Jn. 1:14", "Col. 1:19", "Gal. 4:4", "Heb. 4:15", "1 Tim. 2:5"],
        body: `The Gospel centers on the person of Jesus Christ—eternally preexistent, fully divine, and fully human. According to Jn. 1:14, the eternal Word became flesh and made His dwelling among humanity. This divine condescension revealed the glory of the only begotten Son from the Father, full of grace and truth. Christ's incarnation is the foundational miracle of the Gospel, for in becoming human, the eternal Son entered into time, space, and mortality in order to redeem what was fallen.

Jesus' divine nature affirms that He is not merely a moral teacher or spiritual guide but the very Son of God. As Paul affirms in Col. 1:19, all the fullness of deity dwells in Him bodily. His deity is essential for the Gospel because only God can bear the full weight of divine wrath and provide a sacrifice of infinite worth. No mere human can remove the guilt of countless sinners or satisfy eternal justice. His authority to forgive sin (cf. Mk. 2:5–7), raise the dead (John 11:43–44), and judge all people (John 5:22–27) stems from His divine identity.

Yet Christ is also fully human, having been born of a woman under the law (Gal. 4:4), experiencing hunger (Mt. 4:2), fatigue (Jn. 4:6), grief (John 11:35), and temptation (Mt. 4:1–11). In every respect He shared the human condition, yet without sin (Heb. 4:15). His true humanity enables Him to be the second Adam (Rom. 5:18–19)—a faithful representative for fallen humanity who obeys where Adam failed. His life of perfect obedience fulfills God's righteous demands and qualifies Him to be the spotless Lamb.

The hypostatic union, the theological term for the union of divine and human natures in the one person of Christ, is central to the Gospel. As both God and man, Christ alone is qualified to be the Mediator between God and humanity (1 Tim. 2:5). He bridges the infinite gap between a holy God and sinful people, not as a neutral third party, but as One who shares fully in both natures. In Him, divine justice meets divine mercy.`,
      },
      {
        number: "2",
        title: "The Work of Jesus Christ",
        refs: ["Mk. 1:15", "Mt. 13:10–17", "Mt. 3:15", "Lk. 7:22–23"],
        body: `Jesus' earthly ministry was not only a moral example but the inbreaking of the kingdom of God into human history. He came preaching the Gospel of the kingdom, calling people to repentance and belief (Mk. 1:15). His teaching revealed the character of God, exposed the human heart, and redefined righteousness according to divine standards, not external religion.

His parables unveiled spiritual realities hidden from the proud and revealed to the humble (Mt. 13:10–17). Through these stories, He announced that God's reign was near—not in political power, but in redemptive grace. His authority surpassed that of the religious leaders because He spoke as the Son of God (Mt. 7:28–29).

Christ's miracles were not merely demonstrations of power but signs of the kingdom. When He healed the sick, cast out demons, fed the hungry, and raised the dead, He was unveiling a foretaste of the restoration to come. His miracles testified that the curse was being reversed, that evil was being confronted, and that God's compassionate rule was dawning (cf. Lk. 7:22–23).

Importantly, Jesus lived a life of perfect obedience to the Father. He did not only die for sinners; He lived for them. His obedience to God's law was active and comprehensive, fulfilling all righteousness (Mt. 3:15). This active obedience forms the positive righteousness imputed to believers in justification. His passive obedience, culminating in His suffering and death, satisfied the penalty for sin.

Together, His sinless life and sacrificial death constitute the meritorious foundation of salvation. He did not come merely to be admired or followed but to save—to rescue the lost, to deliver the enslaved, to redeem the condemned.`,
      },
      {
        number: "3",
        title: "His Death",
        refs: [
          "2 Cor. 5:21",
          "Isa. 53:4–6",
          "Rom. 3:25–26",
          "1 Cor. 6:20",
          "Ps. 85:10",
        ],
        body: `The death of Jesus Christ stands at the very heart of the Gospel. It is not merely a tragic martyrdom but the climactic act of redemptive history. On the cross, Christ bore the curse of sin, absorbed the wrath of God, and died in the place of sinners. Paul writes that God made Him who had no sin to become sin for us, so that in Him we might become the righteousness of God (2 Cor. 5:21). This is the great exchange at the heart of the Gospel.

Christ's death was substitutionary—He died in the place of others. This is not moral influence alone; it is penal substitution, where Jesus bore the penalty of sin on behalf of His people. The righteous One was judged so that the guilty could be justified (Isa. 53:4–6; Rom. 3:25–26). His substitution is effectual because He is divine and sufficient because He is human.

His death also served as propitiation, satisfying God's holy anger against sin. As John 2:2 affirms, Jesus is the atoning sacrifice for our sins—not just ours, but for the sins of the whole world. This means that God's wrath has been turned away through the blood of Christ. He is now able to forgive without compromising His justice.

At the cross, Christ accomplished redemption—He paid the price to set sinners free. Believers were bought at a great cost (1 Cor. 6:20), not with silver or gold, but with the precious blood of the Lamb (1 Pet. 1:18–19). Redemption means deliverance from slavery to sin, liberation from the dominion of Satan, and transfer into the freedom of the Kingdom of God.

Additionally, His death secured reconciliation. Humanity, estranged from God by sin, is brought back into fellowship through the cross. As Paul writes, God was in Christ, reconciling the world to Himself and not counting their sins against them (2 Cor. 5:19). Reconciliation restores what was broken and heals what was hostile.

The cross also upholds both God's justice and grace. Sin is not excused or ignored—it is punished in the body of Christ. Yet the sinner is pardoned. At Calvary, justice and mercy meet (Ps. 85:10), and God is revealed as both just and the justifier of the one who has faith in Jesus (Rom. 3:26).`,
      },
      {
        number: "4",
        title: "His Resurrection",
        refs: [
          "1 Cor. 15:17",
          "Rom. 1:4",
          "Acts 2:24",
          "Rom. 6:4",
          "Rom. 8:34",
        ],
        body: `The resurrection of Jesus Christ is the triumphant confirmation of the Gospel. It is not an optional appendix but the vindication of His person and the guarantee of salvation. Paul insists that if Christ is not raised, the Gospel collapses—faith is empty, sin remains, and hope is dead (1 Cor. 15:17).

The resurrection confirms that Christ's death was sufficient and accepted by the Father. It proves His identity as the divine Son (Rom. 1:4), demonstrates His victory over death (Acts 2:24), and establishes Him as the risen Lord who reigns forever. His resurrection is not merely symbolic—it is bodily, historical, and transformational.

Through His resurrection, Jesus became the firstfruits of the new creation. Just as He rose, those who belong to Him will also be raised (1 Cor. 15:20–23). Believers await a bodily resurrection like His—a body that is physical, imperishable, and glorified. This affirms that salvation involves the whole person and even the renewal of creation (Rom. 8:21–23).

The resurrection inaugurates the eschatological age—the age to come has already broken into the present. Believers now share in His resurrection life by the power of the Holy Spirit. They walk in newness of life (Rom. 6:4), not merely forgiven, but transformed. His resurrection power energizes sanctification and grants freedom from sin's dominion.

Even now, the risen Christ intercedes for His people (Rom. 8:34), reigns at the Father's right hand (Heb. 1:3), and empowers the Church for mission. His resurrection assures believers not only of final victory but of present help, spiritual communion, and eternal life.

Together, the person and work of Jesus Christ—His incarnation, sinless life, sacrificial death, and victorious resurrection—constitute the glorious content of the Gospel. This is the message by which sinners are saved, saints are sanctified, and the Church is sustained until Christ returns in power and glory. It is not merely a religious concept but the revealed power and wisdom of God unto salvation for all who believe (Rom. 1:16; 1 Cor. 1:18–24).`,
      },
      {
        number: "5",
        title: "His Ascension and Exaltation",
        refs: [
          "Acts 1:9–11",
          "Eph. 1:20–22",
          "Heb. 7:25",
          "Rom. 8:34",
          "John 16:7",
        ],
        body: `The redemptive work of Christ reaches its heavenly climax in His ascension and exaltation. After His resurrection, Jesus appeared to His disciples for forty days before ascending bodily into heaven, as recorded in Acts 1:9–11. His ascension was not a departure into absence but a transition into supreme authority. According to Ephesians 1:20–22, He was exalted to the right hand of the Father, far above all rule and power, and was given headship over the Church. His exaltation fulfills the royal enthronement imagery of Psalm 110:1 and marks the beginning of His reign as sovereign Lord.

From this position, Christ continues His priestly ministry. Hebrews 7:25 and Romans 8:34 teach that He intercedes on behalf of those who belong to Him, ensuring their ongoing acceptance before God. His intercession is grounded in the sufficiency of His sacrifice, which secures their salvation and sanctification.

The ascension also inaugurated a new phase in redemptive history: the outpouring of the Holy Spirit. As John 16:7 explains, Christ's departure was necessary for the Spirit to come. Acts 2:33 confirms that the exalted Christ poured out the Spirit at Pentecost, empowering the Church for witness and holiness.

The ascension assures believers of His future return. Acts 1:11 declares that just as He ascended visibly, He will come again in glory. His exaltation is therefore not only the conclusion of His earthly mission but the present guarantee of His ongoing rule, intercession, and ultimate return.`,
      },
      {
        number: "6",
        title: "The Human Condition Addressed by the Gospel",
        refs: [
          "Rom. 3:23",
          "Gen. 6:5",
          "Rom. 5:12–19",
          "Jer. 17:9",
          "Eph. 2:1–3",
        ],
        body: `The Gospel begins by addressing the universal condition of sin that defines humanity's need for salvation. Romans 3:23 summarizes that all have sinned and fall short of God's glory. This condition is more than the sum of individual misdeeds; it is a fundamental state of rebellion against God, one that permeates thought, desire, and action. According to Genesis 6:5, even the intentions of the human heart are continually inclined toward evil.

Sin is not merely external but corrupts the whole person. Jesus makes clear in Matthew 5:21–28 that murder and adultery originate in anger and lust—revealing that sin begins in the heart. Thus, even when people appear outwardly moral, their inward motives fall short of divine holiness.

The doctrine of original sin, explained in Romans 5:12–19, teaches that through Adam's transgression, sin entered the world, and death spread to all because all sinned. This means every human being is born not only guilty but also corrupted in nature. Sin's effects are total, as described in Jeremiah 17:9, where the heart is said to be deceitful above all things and incurable.

This inherited condition leads to what theologians call total depravity—not that every person is as bad as possible, but that sin affects every part of human nature: the mind (Eph. 4:18), the will (John 8:34), the emotions (Rom. 1:26), and the body (Rom. 6:13). Left to themselves, human beings cannot love God rightly, believe His truth, or obey His commands with purity of heart.

The condition of spiritual deadness, described in Ephesians 2:1–3, underscores the urgency and necessity of the Gospel. Humanity is not merely in need of guidance or moral improvement but requires resurrection and renewal. Salvation must come from outside the self—it must be the work of divine grace alone.`,
      },
      {
        number: "7",
        title: "Divine Judgment",
        refs: [
          "Rom. 6:23",
          "Rom. 1:18",
          "Rom. 2:5–11",
          "Heb. 9:27",
          "2 Cor. 5:10",
        ],
        body: `The Gospel makes sense only in light of God's holiness and justice. Sin is not a minor defect or human limitation—it is an affront to the character of God, who is absolutely righteous and cannot overlook evil. Romans 6:23 declares that the wages of sin is death, encompassing physical mortality, spiritual alienation, and eternal separation from God.

Romans 1:18 reveals that God's wrath is actively revealed against all ungodliness and unrighteousness of people who suppress the truth. This wrath is not a mood or emotional outburst but a settled and just opposition to all that defies His moral law. God's judgment is impartial, as shown in Romans 2:5–11, where He renders to each person according to their works, with no favoritism.

Hebrews 9:27 states that it is appointed for people to die once and after that to face judgment. On that day, 2 Corinthians 5:10 explains, everyone will appear before the judgment seat of Christ to give an account of what they have done. This judgment is final and inescapable, and only those clothed in the righteousness of Christ will stand vindicated.

The justice of God explains the necessity of the cross. If divine wrath were not real and just, the sacrificial death of Christ would be unnecessary. But because God is both just and the justifier, as Romans 3:26 says, He sent His Son to bear the penalty of sin in the place of sinners, thereby satisfying divine justice and extending mercy.`,
      },
      {
        number: "8",
        title: "Human Inability",
        refs: [
          "Eph. 2:1",
          "John 6:44",
          "Rom. 8:7–8",
          "1 Cor. 2:14",
          "John 3:3–8",
        ],
        body: `Scripture teaches that fallen humanity is incapable of saving itself. According to Ephesians 2:1, people are dead in their trespasses and sins. This spiritual death means they are separated from the life of God and lack the power to respond rightly to divine truth. Jesus affirms in John 6:44 that no one can come to Him unless the Father draws him.

This inability is not merely a limitation of strength but a total moral inability rooted in the will. Romans 8:7–8 explains that the mind set on the flesh is hostile to God, does not submit to His law, and indeed cannot. This is echoed in 1 Corinthians 2:14, which says that the natural person does not accept the things of the Spirit of God because they are spiritually discerned.

Even outwardly religious actions, apart from regeneration, are insufficient. Isaiah 64:6 describes even the most righteous human acts as polluted garments before God. This means that no amount of morality, ritual, or sincerity can overcome the gulf between sinners and a holy God.

This total inability requires a total transformation, which the Bible describes as the new birth. John 3:3–8 shows that unless one is born from above, he cannot see the kingdom of God. The new birth is not a human achievement but the result of the Spirit's sovereign work, granting life where there was only death.`,
      },
      {
        number: "9",
        title: "The Response Required by the Gospel",
        refs: [
          "Mk. 1:15",
          "2 Cor. 7:10",
          "Acts 16:31",
          "Rom. 10:9–10",
          "Eph. 2:8–9",
        ],
        body: `While salvation is entirely of grace, the Gospel demands a response. This response is twofold: repentance and faith. Jesus begins His public ministry in Mark 1:15 by calling people to repent and believe in the Gospel. These are not optional religious acts but necessary conditions for receiving salvation.

Repentance involves a change of mind, heart, and behavior. In 2 Corinthians 7:10, Paul distinguishes godly sorrow, which leads to repentance, from worldly sorrow, which brings death. True repentance is not simply regret over sin's consequences but a turning away from rebellion and a turning toward God. Matthew 3:8 calls for fruit that matches a repentant heart—visible change that demonstrates inward transformation.

Faith is the other essential response. Acts 16:31 reveals the apostolic call to believe in the Lord Jesus Christ in order to be saved. This faith involves not only knowledge and agreement with the truth but personal trust in Christ's person and work. John 14:6 records Jesus declaring Himself to be the only way to the Father, making trust in Him exclusive and absolute.

Faith has a threefold aspect: understanding the Gospel message, believing it to be true, and relying on Christ alone for salvation. Romans 10:9–10 explains that faith is exercised by confessing with the mouth and believing in the heart that Jesus is Lord and that God raised Him from the dead.

This faith is not self-generated. Philippians 1:29 states that it has been granted not only to believe in Christ but also to suffer for His sake. Saving faith is the instrument through which grace is received, as Ephesians 2:8–9 teaches, and it is itself a gift from God, not a product of human effort.

True faith brings assurance, as stated in 1 John 5:13, where believers are told that they may know they have eternal life. This assurance is based not on subjective feelings but on the objective promises of God, the inward witness of the Spirit, and the outward evidence of a transformed life.`,
      },
      {
        number: "10",
        title: "Surrender to Christ's Lordship",
        refs: [
          "Rom. 10:9",
          "Acts 2:36",
          "Mt. 28:18",
          "2 Cor. 10:5",
          "Lk. 9:23",
        ],
        body: `The Gospel summons every person to submit to Jesus Christ as Lord, not merely to accept Him as a personal Savior in a privatized or compartmentalized sense. The confession that "Jesus is Lord" (Rom. 10:9) stands at the heart of saving faith, reflecting the early Church's foundational declaration of allegiance to the risen and exalted Christ. This lordship is not a later addition to faith or a higher level of commitment; it is essential to the Gospel itself. The Jesus who redeems is the same Jesus who reigns (Acts 2:36), and true belief entails recognition of both.

The lordship of Christ denotes His sovereign authority over all creation, an authority He exercises by virtue of His divine nature and victorious resurrection (Mt. 28:18). It is not limited to the spiritual sphere or confined to the Church but encompasses every realm—personal, social, political, and cosmic. As such, surrendering to Christ's lordship is not merely a mental agreement; it involves the whole person—mind, heart, and will—coming under His rule.

This surrender entails a decisive and ongoing turning away from self-rule and autonomy. It means renouncing any competing allegiances—whether cultural traditions, worldly ideologies, or personal ambitions—and submitting every thought and decision to the obedience of Christ (2 Cor. 10:5). Faith in Jesus cannot coexist with stubborn resistance to His authority; to trust Him for salvation while denying His right to rule one's life is to misunderstand both who He is and what He came to do.

The implications of Christ's lordship are profound and far-reaching. It transforms the way believers approach every area of life. In relationships, it means pursuing love, truth, and reconciliation in a Christ-like manner (Eph. 5:1–2). In vocation, it means working as unto the Lord and not merely for human approval (Col. 3:23–24). In finances, it means stewardship that reflects kingdom priorities (Mt. 6:19–21). In ethics, it means obedience to God's moral standards, even when they conflict with prevailing cultural norms (Jn. 14:15). In all these areas, Scripture becomes the authoritative guide, and the glory of Christ becomes the ultimate aim (1 Cor. 10:31).

While believers still battle sin and experience moral failure, they cannot live in habitual rebellion against Christ's authority without undermining the credibility of their profession. Saving faith produces not perfection but direction—a Spirit-enabled orientation of the heart and life toward obedience (Rom. 6:17–18). As believers grow in grace, they become more aware of areas that have yet to be surrendered and more eager to bring those under Christ's rule.

This progressive surrender is the essence of discipleship. Jesus calls His followers to deny themselves, take up their cross daily, and follow Him (Lk. 9:23). This means dying to self-centered living and embracing a life of submission, service, and sacrifice for the sake of Christ. As the believer matures, this surrender deepens, not only in visible actions but in hidden motives, private desires, and internal attitudes.

The Holy Spirit plays an indispensable role in enabling this surrender. He convicts believers of sin, illumines Scripture, strengthens obedience, and bears witness that Jesus is Lord (Jn. 16:13–14; 1 Cor. 12:3). Through the Spirit's empowering presence, the believer is able to increasingly conform to the image of Christ (Rom. 8:29), submitting to His lordship not out of fear or compulsion, but with joy and devotion.

Ultimately, surrendering to Christ's lordship is an act of worship. It flows from gratitude for His grace and a desire to honor the One who bought us with His blood (1 Cor. 6:19–20). It is both a moment of decisive commitment and a lifetime of daily yielding. And it is through this surrender that believers experience true freedom—not the freedom of self-rule, but the liberty of joyful obedience to the rightful King.`,
      },
    ],
  },
  {
    id: "results",
    label: "The Results of the Gospel",
    shortLabel: "Results",
    sections: [
      {
        number: "1",
        title: "Justification",
        refs: ["Rom. 5:1", "Rom. 5:18–19", "Rom. 3:28"],
        body: `One of the primary results of the Gospel is justification, the judicial act by which God declares believing sinners righteous solely on the basis of Christ's perfect obedience and atoning death. This declaration is not based on any inherent righteousness in the sinner but entirely on the righteousness of Christ credited to the believer through faith (Rom. 5:1). In this legal transaction, the believer's guilt is removed, and Christ's righteousness is accounted to them, resulting in peace with God and acceptance into His presence.

Justification is distinguished from sanctification in that it does not change the believer's nature but his status before God. It is instantaneous and irreversible, not progressive. Paul draws a parallel between the imputation of Adam's sin resulting in condemnation and the imputation of Christ's righteousness leading to justification (Rom. 5:18–19). Justification is more than forgiveness; it includes the full credit of Christ's law-keeping, granting the believer a perfect record before the divine Judge.

This justification is received through faith alone, not by works or personal merit (Rom. 3:28). Faith is the instrument, not the basis, of justification. It receives what God freely offers but contributes nothing to the ground of righteousness. Thus, justification is an act of grace, rooted in the substitutionary work of Christ and received solely by trusting in Him.`,
      },
      {
        number: "2",
        title: "Regeneration and New Birth",
        refs: ["John 3:3", "2 Cor. 5:17", "John 3:6"],
        body: `The Gospel brings about regeneration—a radical inner renewal whereby the spiritually dead sinner is made alive by the sovereign work of the Holy Spirit. Jesus explained the necessity of this spiritual rebirth to Nicodemus, indicating that unless one is born again, he cannot perceive or enter God's kingdom (John 3:3, 5). This new birth is not a moral reformation or psychological renewal, but the impartation of spiritual life that enables true faith, repentance, and transformation.

Paul echoes this reality when he describes believers as new creations in Christ, where old patterns pass away and new spiritual life emerges (2 Cor. 5:17). Regeneration renews the heart and mind, giving the individual new desires, affections, and capacities to love and obey God. It breaks the bondage to sin and instills a disposition toward holiness and truth.

This work of new birth is effected by the Holy Spirit, who enlightens the mind, softens the heart, and draws the sinner to faith. Jesus made clear that this birth is of the Spirit, not of the flesh (John 3:6). Regeneration precedes saving faith, ensuring that the sinner, once spiritually dead, can now respond to the Gospel. It is a sovereign act of God that ensures the efficacy and outcome of His saving purpose.`,
      },
      {
        number: "3",
        title: "Adoption into God's Family",
        refs: ["Rom. 8:15–17"],
        body: `Through the Gospel, believers are adopted as God's children. This adoption is both legal and relational, granting the believer full rights as sons and daughters of God. Paul teaches that those who receive the Spirit of adoption are brought into intimate relationship with God, addressing Him as Father and enjoying the privileges of heirs (Rom. 8:15–17).

While regeneration imparts new life, adoption confers new status. It brings the believer into God's household, securing both present access to the Father and future inheritance in the kingdom. This inheritance includes eternal life, glorification, and the sharing of Christ's rule (Rom. 8:17). Adoption is not merely a metaphor; it reflects the legal standing of the believer as part of God's covenant family.

With adoption come family responsibilities. Believers are called to reflect their Father's character by living as children of light, pursuing holiness, and loving the family of God. They also enjoy privileges such as divine provision, protection, and access to God in prayer.`,
      },
      {
        number: "4",
        title: "Sanctification",
        refs: ["Phil. 2:12–13", "Gal. 5:22–23"],
        body: `Another result of the Gospel is sanctification, the ongoing process by which believers are progressively conformed to the image of Christ. While justification is instantaneous and positional, sanctification is lifelong and practical. Paul teaches that sanctification involves both divine initiative and human responsibility; believers are to work out their salvation because God is at work within them (Phil. 2:12–13).

Sanctification begins at conversion when the believer is set apart for God. This positional sanctification is the basis for the daily pursuit of practical holiness. As believers grow in grace, they increasingly reflect the character of Christ in attitudes, words, and deeds.

The Holy Spirit plays a central role in sanctification. He produces spiritual fruit, such as love, joy, peace, and self-control, as believers walk in step with Him (Gal. 5:22–23). The Spirit also empowers believers to resist sin, illuminates Scripture for instruction, and uses trials, prayer, fellowship, and worship as instruments of growth.

Sanctification is not perfectionism, but real progress in godliness. It involves struggle, effort, and the mortification of sin, but it is undergirded by the Spirit's power and the believer's union with Christ. Over time, believers experience increasing victory over sin and deepening communion with God.`,
      },
      {
        number: "5",
        title: "Eternal Life",
        refs: ["Jn. 3:16", "Jn. 5:24"],
        body: `The Gospel offers the gift of eternal life to all who believe. This life is not merely endless duration but a new kind of life that begins at conversion and continues forever. Jesus taught that those who believe in Him already possess eternal life and will never come into condemnation (Jn. 3:16; 5:24). This life is marked by intimate knowledge of God and fellowship with Him through Christ.

Eternal life encompasses both the present experience of salvation and the future hope of resurrection glory. It includes the indwelling presence of the Holy Spirit, communion with the Father and Son, and the promise of full glorification in the age to come. Believers have been brought from death to life and now participate in the life of the Triune God.

This eternal life is secure and cannot be lost, for it is founded on the finished work of Christ and the unchanging promise of God. It is a life sustained by grace and oriented toward eternity, giving the believer joy, hope, and perseverance amid earthly trials.`,
      },
      {
        number: "6",
        title: "Security of Salvation",
        refs: ["Jn. 10:28–29", "Rom. 8:29–30", "Eph. 1:13–14", "1 Pet. 1:5"],
        body: `The Gospel assures believers of the security of their salvation. Jesus taught that those whom the Father has given Him will never be lost, and no one can snatch them from His hand (Jn. 10:28–29). This security rests not on the believer's performance but on the Father's sovereign purpose, the Son's saving work, and the Spirit's indwelling presence.

Salvation is a divine work from beginning to end. Those whom God foreknew, He predestined, called, justified, and glorified (Rom. 8:29–30). The certainty of glorification flows from the unbreakable chain of God's redemptive purpose. The believer's assurance is grounded in this divine plan and sustained by the ongoing intercession of Christ and the sealing of the Holy Spirit (Eph. 1:13–14).

This security does not promote spiritual laziness but encourages perseverance and obedience. Believers are kept by the power of God through faith (1 Pet. 1:5). When they stumble, God's grace restores them; when they are weak, the Spirit sustains them. This security provides profound comfort, especially in times of doubt, failure, or suffering.`,
      },
    ],
  },
  {
    id: "scope",
    label: "The Scope of the Gospel",
    shortLabel: "Scope",
    sections: [
      {
        number: "1",
        title: "Personal Transformation",
        refs: ["Rom. 12:2", "2 Pet. 1:4", "Gal. 5:22–23", "Rom. 6:18–22"],
        body: `The Gospel brings about profound personal transformation, beginning with the new birth and continuing through sanctification. This transformation involves the renewal of the heart, mind, and will, resulting in a life increasingly aligned with God's purposes. Believers are no longer conformed to the pattern of the world but are transformed by the renewing of their minds (Rom. 12:2), leading to discernment of God's will in every area of life.

Through union with Christ, believers become partakers of the divine nature, escaping the corruption of the world (2 Pet. 1:4). The Spirit who indwells them produces inner change that manifests outwardly in love, humility, purity, and obedience (Gal. 5:22–23). This change is not superficial but comprehensive, touching every dimension of life including family, vocation, finances, and entertainment.

The Gospel thus addresses not only sin's penalty but also its dominion. It frees from bondage and grants the power to live victoriously in Christ. As Paul states, believers are no longer slaves to sin but have become slaves to righteousness, bearing fruit unto holiness (Rom. 6:18–22). This radical reorientation of the self—its values, desires, and aims—distinguishes genuine conversion from cultural religiosity.`,
      },
      {
        number: "2",
        title: "The Church",
        refs: ["Eph. 2:14–16", "1 Cor. 12:27", "Gal. 3:28", "Matt. 28:19–20"],
        body: `The Gospel forms the Church, the redeemed people of God, joined together in one body through the reconciling work of Christ. Paul declares that Christ has broken down the dividing wall of hostility, making one new humanity from formerly alienated groups (Eph. 2:14–16). The Church is both the product and instrument of the Gospel, a display of God's grace and the primary agent of His mission in the world.

The Church is not incidental to the Gospel but essential to it. As the body of Christ (1 Cor. 12:27), the Church is where believers exercise spiritual gifts, receive edification, and grow into maturity. It is a spiritual household built upon Christ the cornerstone (Eph. 2:19–22), where God's presence dwells through the Spirit.

Unity in the Church reflects the unity of the Triune God and testifies to the power of the Gospel to reconcile people not only to God but to one another. The Church is a diverse yet unified body where distinctions of ethnicity, gender, and class are transcended in Christ (Gal. 3:28), without obliterating individual identity or cultural richness.

Obedient to the Great Commission (Matt. 28:19–20), the Church is called to evangelize the lost and disciple the saved. It is both a worshiping community and a missional people, bearing witness to the kingdom in word and deed. Through preaching, sacraments, and communal life, the Church nurtures faith and equips the saints for service.`,
      },
      {
        number: "3",
        title: "Cosmic Restoration",
        refs: ["Gen. 3", "Rom. 8:20", "Rom. 8:19–22", "Col. 1:20", "Rev. 21:1"],
        body: `The Gospel's redemptive scope includes not only individuals and communities but the entire created order. The fall introduced corruption, decay, and futility into creation (Gen. 3; Rom. 8:20), but the Gospel promises full restoration. Paul affirms that creation itself longs for liberation from bondage to decay and will share in the freedom of the children of God (Rom. 8:19–22).

This cosmic vision is rooted in Christ's reconciling work. Through His blood, God is reconciling all things in heaven and on earth to Himself (Col. 1:20). The promise of new heavens and a new earth (Isa. 65:17; Rev. 21:1) assures believers that the future involves not escape from creation, but its renewal and perfection.

Thus, the Gospel restores harmony not only between God and humanity, but also between humanity and creation. Environmental brokenness, natural disaster, and even death itself will one day be overcome. This vision instills hope and responsibility as believers anticipate the consummation of all things and live now as faithful stewards of creation.`,
      },
      {
        number: "4",
        title: "The Kingdom of God",
        refs: ["Mk. 1:15", "Matt. 5–7", "Matt. 6:33", "Rev. 11:15"],
        body: `The Gospel is the announcement that the kingdom of God has come in the person and work of Jesus Christ. This kingdom is not defined by geopolitical boundaries or worldly power but by the reign of God over those who submit to His rule. Jesus proclaimed the Gospel of the kingdom, calling people to repentance and faith (Mk. 1:15).

The kingdom is both already and not yet—already inaugurated through Christ's death and resurrection and the sending of the Spirit, but not yet fully realized until His return. Believers now live under the rule of the risen King, empowered to reflect kingdom values in justice, mercy, and peace (Matt. 5–7).

This kingdom perspective transforms ethics, relationships, and mission. Believers are called to seek the kingdom first (Matt. 6:33), embodying its priorities in daily life and bearing witness to its reality in a fallen world. Though the kingdom remains opposed by the present evil age, its victory is assured, and its full arrival will bring final renewal and judgment (Rev. 11:15).`,
      },
      {
        number: "5",
        title: "Eschatological Hope",
        refs: [
          "1 Cor. 15:20–23",
          "Phil. 3:20–21",
          "Jn. 5:28–29",
          "Heb. 12:28",
          "Rev. 21:3–5",
        ],
        body: `The Gospel offers a sure and glorious hope anchored in the return of Christ, the resurrection of the dead, the final judgment, and the eternal kingdom of God. This hope is not speculative but grounded in God's promises and Christ's historical resurrection, which is the firstfruits of all who believe (1 Cor. 15:20–23).

Believers await the appearing of their great God and Savior, who will transform their lowly bodies to be like His glorious body (Phil. 3:20–21). The righteous will be raised to eternal life, while the unrepentant will face judgment (Jn. 5:28–29). This eschatological vision fills life with meaning, fuels perseverance in suffering, and motivates holy living (Tit. 2:11–13).

Christian hope is not escapism but shapes present faithfulness. Because the current age is passing away and an unshakable kingdom is coming (Heb. 12:28), believers are exhorted to live in readiness, fixing their eyes on the things above and investing in eternal realities.

The final hope of the Gospel is not merely personal salvation but the full unveiling of God's glory in a renewed creation, where God will dwell with His people forever (Rev. 21:3–5). In this consummation, every tear will be wiped away, death will be no more, and righteousness will dwell eternally.`,
      },
    ],
  },
];

// ── Accordion item component ──────────────────────────────────────────────────
interface AccordionItemProps {
  section: GospelSection;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ section, isOpen, onToggle }: AccordionItemProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-surface-dim last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 py-6 px-0 text-left group focus:outline-none"
      >
        {/* Section number */}
        <span
          className="text-2xl font-black text-stone-200 shrink-0 leading-none mt-0.5 group-hover:text-amber-200 transition-colors duration-200 select-none font-headline"
          style={{ minWidth: "2.5rem" }}
        >
          {section.number}
        </span>

        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-on-surface group-hover:text-surface-tint transition-colors duration-200 leading-snug font-headline italic">
            {section.title}
          </h4>
          {/* Scripture ref badges */}
          {/* <div className="flex flex-wrap gap-1.5 mt-2">
            {section.refs.map((ref, i) => (
              <span
                key={i}
                className="text-xs font-medium text-surface-tint bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-sm"
              >
                {ref}
              </span>
            ))}
          </div> */}
        </div>

        {/* Chevron */}
        <ChevronDown
          size={18}
          className={`shrink-0 mt-1 text-outline-variant transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {/* Collapsible body */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div ref={bodyRef} className="pb-7 pl-14 pr-2">
          {section.body.split("\n\n").map((para: string, i: number) => (
            <p
              key={i}
              className="text-on-surface-variant leading-relaxed text-sm mb-4 last:mb-0"
            >
              {para.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main page component ───────────────────────────────────────────────────────
export default function OurTheology() {
  const [activeTab, setActiveTab] = useState<string>("content");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (tabId: string, sectionNumber: string) => {
    const key = `${tabId}-${sectionNumber}`;
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isSectionOpen = (tabId: string, sectionNumber: string) => {
    return !!openSections[`${tabId}-${sectionNumber}`];
  };

  const activeTabData = gospelTabs.find((t) => t.id === activeTab);

  return (
    <main>
      <PageHero
        tag="What We Believe"
        title="Our Theology"
        subtitle="The doctrinal convictions that form the unshakeable foundation of Word Biblical Ministries — beliefs rooted in Scripture and tested through the ages."
      />

      {/* ── Intro ── */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-surface-tint text-xs uppercase tracking-widest font-bold mb-4">
              Our Foundation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6 font-headline italic">
              Standing on the Truth of God's Word
            </h2>
            <div className="flex items-center justify-center gap-3 my-5">
              <div className="h-px w-16 bg-amber-400" />
              <div className="w-2 h-2 bg-primary rotate-45" />
              <div className="h-px w-16 bg-amber-400" />
            </div>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              At WBM, theology is not merely academic — it is the living breath
              of who we are and how we minister. Our doctrinal convictions shape
              our worship, our preaching, our discipleship, and our engagement
              with the world. Below are the core beliefs that define us as a
              ministry.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ── Core Doctrine Cards ── */}
      <section className="py-10 pb-24 px-6 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctrines.map((d, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 50}>
                <div className="bg-white rounded-sm p-8 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-amber-600 h-full">
                  <h3 className="text-xl font-bold text-on-surface mb-1 font-headline italic">
                    {d.title}
                  </h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                    {d.ref}
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gospel Exposition Divider ── */}
      <AnimateOnScroll animation="zoom-in">
        <div className="bg-stone-900 py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 bg-stone-700" />
              <BookOpen className="text-primary-container" size={22} />
              <div className="h-px flex-1 bg-stone-700" />
            </div>
            <p className="text-primary-container text-xs uppercase tracking-widest font-bold mb-3">
              A Full Exposition
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-headline italic">
              The Gospel: Content, Results & Scope
            </h2>
            <p className="text-outline-variant leading-relaxed">
              An in-depth theological exposition of the Gospel of Jesus Christ —
              its substance, its saving effects, and its cosmic reach. Explore
              each section at your own pace.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Tabbed Gospel Exposition ── */}
      <section className="bg-white px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Sticky Tab Bar */}
          <div className="sticky top-0 z-20 bg-white border-b border-surface-dim -mx-6 px-6">
            <div className="max-w-5xl mx-auto flex gap-0 overflow-x-auto">
              {gospelTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 py-5 px-6 text-sm font-semibold border-b-2 transition-all duration-200 focus:outline-none ${
                    activeTab === tab.id
                      ? "border-amber-600 text-surface-tint"
                      : "border-transparent text-outline-variant hover:text-stone-700 hover:border-stone-300"
                  }`}
                >
                  {/* Short label on mobile, full on desktop */}
                  <span className="md:hidden">{tab.shortLabel}</span>
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab content header */}
          <div className="pt-12 pb-6 border-b border-stone-100 mb-2">
            <div className="flex items-baseline gap-4">
              <p className="text-surface-tint text-xs uppercase tracking-widest font-bold">
                {activeTabData?.shortLabel}
              </p>
              <div className="h-px flex-1 bg-stone-100" />
              <p className="text-outline-variant text-xs">
                {activeTabData?.sections.length} sections
              </p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-on-background mt-3 font-headline italic">
              {activeTabData?.label}
            </h3>
          </div>

          {/* Accordion list */}
          <div>
            {activeTabData?.sections.map((section, idx) => (
              <AnimateOnScroll
                key={section.number}
                animation="fade-in"
                delay={idx * 50}
              >
                <AccordionItem
                  section={section}
                  isOpen={isSectionOpen(activeTab, section.number)}
                  onToggle={() => toggleSection(activeTab, section.number)}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scripture CTA ── */}
      <AnimateOnScroll animation="zoom-in">
        <section className="bg-surface-tint py-16 px-6 text-center">
          <p className="text-amber-100 text-xs uppercase tracking-widest font-bold mb-3">
            Rooted & Grounded
          </p>
          <blockquote className="text-white text-2xl md:text-3xl italic max-w-3xl mx-auto mb-3 font-headline italic">
            "Sanctify them through thy truth: thy word is truth."
          </blockquote>
          <p className="text-amber-200 tracking-widest text-sm uppercase">
            — John 17:17
          </p>
        </section>
      </AnimateOnScroll>
    </main>
  );
}
