import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Languages } from 'src/app/models/languages.enum';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private url = "http://localhost:3000";

  teluguPromiseVerses: any[] = [
    { id: 0 , reference: 'సామెతలు 3:6',	text: '"నీ ప్రవర్తన అంతటియందు ఆయన అధికారమునకు ఒప్పుకొనుము అప్పుడు ఆయన నీ త్రోవలను సరాళము చేయును'},
  ];

  promiseVerses: any[] = [
    // tslint:disable-next-line: max-line-length
    { id: 0 , reference: 'Psalm 84:11',	text: 'The LORD God is a sun and shield: the LORD will give grace and glory: no good thing will he withhold from them that walk uprightly (Psalm 84:11)'},
    { id: 1 , reference: 'Psalm 37:23', text: 'The steps of a good man are ordered by the LORD: and he delighteth in his way (Psalm 37:23)'},
    { id: 2, reference: 'Proverbs 3:6', text: 'In all thy ways acknowledge him, and he shall direct thy paths (Proverbs 3:6)'},
    { id: 3, reference: '1Samuel 2:30', text: 'For them that honour me I will honour (1Samuel 2:30)'},
    // tslint:disable-next-line: max-line-length
    { id: 4, reference: 'Psalm 1:3', text: 'He shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper (Psalm 1:3)'},
    { id: 5, reference: 'Psalm 37:5', text: 'Commit thy way unto the LORD; trust also in him; and he shall bring it to pass (Psalm 37:5)'},
     // tslint:disable-next-line: max-line-length
    { id: 6, reference: 'Psalm 128:2', text: 'Thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee (Psalm 128:2)'},
    // tslint:disable-next-line: max-line-length
    { id: 7, reference: 'Deuteronomy 28:12', text: 'The LORD shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow (Deuteronomy 28:12)'},
    { id: 8, reference: 'Psalm 115:14', text: 'The LORD shall increase you more and more, you and your children (Psalm 115:14)'},
    // tslint:disable-next-line: max-line-length
    { id: 9, reference: 'Deuteronomy 26:11', text: 'And thou shalt rejoice in every good thing which the LORD thy God hath given unto thee, and unto thine house  (Deuteronomy 26:11)'},
    { id: 10, reference: 'Psalm 91:10', text: 'There shall no evil befall thee, neither shall any plague come nigh thy dwelling  (Psalm 91:10)'},
    { id: 11, reference: 'Psalm 91:15', text: 'He shall call upon me, and I will answer him  (Psalm 91:15)'},
     // tslint:disable-next-line: max-line-length
    { id: 12, reference: 'Philippians 2:13', text: 'For it is God which worketh in you both to will and to do of his good pleasure  (Philippians 2:13)'},
     // tslint:disable-next-line: max-line-length
    { id: 13, reference: 'Psalm 32:8', text: 'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye  (Psalm 32:8)'},
    { id: 14, reference: 'Isaiah 61:8', text: 'I will direct their work in truth  (Isaiah 61:8)'},
    { id: 15, reference: 'Isaiah 58:11', text: 'And the LORD shall guide thee continually  (Isaiah 58:11)'},
    // tslint:disable-next-line: max-line-length
    { id: 16, reference: 'Psalm 1:3', text: 'He shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper  (Psalm 1:3)'},
     // tslint:disable-next-line: max-line-length
    { id: 17, reference: 'Psalm 92:12', text: 'The righteous shall flourish like the palm tree: he shall grow like a cedar in Lebanon  (Psalm 92:12)'},
    { id: 18, reference: 'Jeremiah 30:22', text: 'Ye shall be my people, and I will be your God  (Jeremiah 30:22)'},
    { id: 19, reference: 'Exodus 33:14', text: 'My presence shall go with thee, and I will give thee rest  (Exodus 33:14)'},
    // tslint:disable-next-line: max-line-length
    { id: 20, reference: 'Deuteronomy 31:8', text: 'The LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee  (Deuteronomy 31:8)'},
    { id: 21, reference: 'Deuteronomy 7:13', text: 'He will love thee, and bless thee, and multiply thee  (Deuteronomy 7:13)'},
    // tslint:disable-next-line: max-line-length
    { id: 22, reference: 'Zephaniah 3:17', text: 'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing  (Zephaniah 3:17)'},
    // tslint:disable-next-line: max-line-length
    { id: 23, reference: 'Jeremiah 32:41', text: 'I will rejoice over them to do them good, and I will plant them in this land assuredly with my whole heart and with my whole soul  (Jeremiah 32:41)'},
    { id: 24, reference: 'Psalm 103:4', text: 'Who crowneth thee with lovingkindness and tender mercies  (Psalm 103:4)'},
    { id: 25, reference: 'Zechariah 2:8', text: 'He that toucheth you toucheth the apple of his eye  (Zechariah 2:8)'},
    { id: 26, reference: 'Proverbs 1:23', text: 'Behold, I will pour out my Spirit unto you, I will make known my words unto you  (Proverbs 1:23)'},
    { id: 27, reference: 'Nehemiah 8:10', text: 'The joy of the LORD is your strength  (Nehemiah 8:10'},
    // tslint:disable-next-line: max-line-length
    { id: 28, reference: 'Jeremiah 33:3', text: 'Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not  (Jeremiah 33:3'},
    { id: 29, reference: 'Psalm 91:14', text: 'I will set him on high, because he hath known my name  (Psalm 91:14'},
     // tslint:disable-next-line: max-line-length
    { id: 30, reference: 'Isaiah 46:11', text: 'I have spoken it, I will also bring it to pass; I have purposed it, I will also do it  (Isaiah 46:11'},
    { id: 31, reference: 'Psalm 91:16', text: 'With long life will I satisfy him, and shew him my salvation  (Psalm 91:16'},
     // tslint:disable-next-line: max-line-length
    { id: 32, reference: 'Isaiah 27:3', text: 'I the LORD do keep it; I will water it every moment: lest any hurt it, I will keep it night and day  (Isaiah 27:3'},
    // tslint:disable-next-line: max-line-length
    { id: 33, reference: 'Genesis 12:2	', text: 'I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing . (Genesis 12:2)'},
     // tslint:disable-next-line: max-line-length
    { id: 34, reference: 'Genesis 12:3', text: 'I will bless those who bless you … and all the peoples of the earth will be blessed through you. (Genesis 12:3)'},
    { id: 35, reference: 'Genesis 15:1	', text:'I am a shield to you; Your reward shall be very great. (Genesis 15:1)'},
    // tslint:disable-next-line: max-line-length
    { id: 36, reference: 'Psalm 84:11	', text: 'The LORD God is a sun and shield: the LORD will give grace and glory: no good thing will he withhold from them that walk uprightly  (Psalm 84:11'},
    { id: 37, reference: 'Psalm 37:23', text: 'The steps of a good man are ordered by the LORD: and he delighteth in his way  (Psalm 37:23'},
    { id: 38, reference: 'Proverbs 3:6', text: 'In all thy ways acknowledge him, and he shall direct thy paths  (Proverbs 3:6)'},
    { id: 39, reference: '1Samuel 2:30', text: 'For them that honour me I will honour  (1Samuel 2:30'},
    // tslint:disable-next-line: max-line-length
    { id: 40, reference: 'Psalm 1:3', text: 'He shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper  (Psalm 1:3'},
    { id: 41, reference: 'Psalm 37:5', text: 'Commit thy way unto the LORD; trust also in him; and he shall bring it to pass  (Psalm 37:5'},
    // tslint:disable-next-line: max-line-length
    { id: 42, reference: 'Psalm 128:2', text: 'Thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee  (Psalm 128:2'},
    // tslint:disable-next-line: max-line-length
    { id: 43, reference: 'Deuteronomy 28:12', text: 'The LORD shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow  (Deuteronomy 28:12'},
    { id: 44, reference: 'Psalm 115:14', text: 'The LORD shall increase you more and more, you and your children  (Psalm 115:14'},
    // tslint:disable-next-line: max-line-length
    { id: 45, reference: 'Deuteronomy 26:11', text: 'And thou shalt rejoice in every good thing which the LORD thy God hath given unto thee, and unto thine house  (Deuteronomy 26:11)'},
    { id: 46, reference: 'Psalm 91:10', text: 'There shall no evil befall thee, neither shall any plague come nigh thy dwelling  (Psalm 91:10'},
    { id: 47, reference: 'Psalm 91:15', text: 'He shall call upon me, and I will answer him  (Psalm 91:15'},
    // tslint:disable-next-line: max-line-length
    { id: 48, reference: 'Philippians 2:13', text: 'For it is God which worketh in you both to will and to do of his good pleasure  (Philippians 2:13'},
    // tslint:disable-next-line: max-line-length
    { id: 49, reference: 'Psalm 32:8', text: 'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye  (Psalm 32:8'},
    { id: 50, reference: 'Isaiah 61:8', text: 'I will direct their work in truth  (Isaiah 61:8'},
    { id: 51, reference: 'Isaiah 58:11', text: 'And the LORD shall guide thee continually  (Isaiah 58:11'},
    // tslint:disable-next-line: max-line-length
    { id: 52, reference: 'Psalm 1:3', text: 'He shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper  (Psalm 1:3'},
    // tslint:disable-next-line: max-line-length
    { id: 53, reference: 'Psalm 92:12', text: 'The righteous shall flourish like the palm tree: he shall grow like a cedar in Lebanon  (Psalm 92:12'},
    { id: 54, reference: 'Jeremiah 30:22', text: 'Ye shall be my people, and I will be your God  (Jeremiah 30:22'},
    { id: 55, reference: 'Exodus 33:14', text: 'My presence shall go with thee, and I will give thee rest  (Exodus 33:14'},
    // tslint:disable-next-line: max-line-length
    { id: 56, reference: 'Deuteronomy 31:8', text: 'The LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee  (Deuteronomy 31:8'},
    { id: 57, reference: 'Deuteronomy 7:13', text: 'He will love thee, and bless thee, and multiply thee  (Deuteronomy 7:13'},
    // tslint:disable-next-line: max-line-length
    { id: 58, reference: 'Zephaniah 3:17', text: 'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing  (Zephaniah 3:17'},
    // tslint:disable-next-line: max-line-length
    { id: 59, reference: 'Jeremiah 32:41', text: 'I will rejoice over them to do them good, and I will plant them in this land assuredly with my whole heart and with my whole soul  (Jeremiah 32:41'},
    { id: 60, reference: 'Psalm 103:4', text: 'Who crowneth thee with lovingkindness and tender mercies  (Psalm 103:4'},
    { id: 61, reference: 'Zechariah 2:8', text: 'He that toucheth you toucheth the apple of his eye  (Zechariah 2:8'},
    { id: 62, reference: 'Proverbs 1:23', text: 'Behold, I will pour out my Spirit unto you, I will make known my words unto you  (Proverbs 1:23'},
    { id: 63, reference: 'Nehemiah 8:10', text: 'The joy of the LORD is your strength  (Nehemiah 8:10'},
    // tslint:disable-next-line: max-line-length
    { id: 64, reference: 'Jeremiah 33:3', text: 'Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not  (Jeremiah 33:3'},
    { id: 65, reference: 'Psalm 91:14', text: 'I will set him on high, because he hath known my name  (Psalm 91:14'},
    // tslint:disable-next-line: max-line-length
    { id: 66, reference: 'Isaiah 46:11', text: 'I have spoken it, I will also bring it to pass; I have purposed it, I will also do it  (Isaiah 46:11'},
    { id: 67, reference: 'Psalm 91:16', text: 'With long life will I satisfy him, and shew him my salvation  (Psalm 91:16'},
    // tslint:disable-next-line: max-line-length
    { id: 68, reference: 'Isaiah 27:3', text: 'I the LORD do keep it; I will water it every moment: lest any hurt it, I will keep it night and day  (Isaiah 27:3'},
    // tslint:disable-next-line: max-line-length
    { id: 69, reference: 'Genesis 12:2', text: 'I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing . (Genesis 12:2)'},
    // tslint:disable-next-line: max-line-length
    { id: 70, reference: 'Genesis 12:3	', text: 'I will bless those who bless you … and all the peoples of the earth will be blessed through you. (Genesis 12:3)'},
    { id: 71, reference: 'Genesis 15:1	', text: 'I am a shield to you; Your reward shall be very great. (Genesis 15:1)'},
    // tslint:disable-next-line: max-line-length
    { id: 72, reference: 'Isaiah 26:3	', text: 'Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee. Isaiah 26:3'},
    // tslint:disable-next-line: max-line-length
    { id: 73, reference: 'Philippians 4:19	', text: 'But my God shall supply all your need according to his riches in glory by Christ Jesus. Philippians 4:19'},
    // tslint:disable-next-line: max-line-length
    { id: 74, reference: 'Isaiah 41:10	', text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness. Isaiah 41:10'},
    { id: 75, reference: 'Jeremiah 31:14	', text: 'And my people shall be satisfied with my goodness, saith the Lord. Jeremiah 31:14'},
    // tslint:disable-next-line: max-line-length
    { id: 76, reference: 'Joel 2:26	', text: 'And ye shall eat in plenty, and be satisfied, and praise the name of the Lord your God, that hath dealt wondrously with you: and my people shall never be ashamed. Joel 2:26'},
    { id: 77, reference: 'Psalm 107:9	', text: 'For he satisfieth the longing soul, and filleth the hungry soul with goodness. Psalm 107:9'},
    // tslint:disable-next-line: max-line-length
    { id: 78, reference: 'Isaiah 12:2, 3	', text: 'Behold, God is my salvation; Therefore with joy, shall ye draw water out of the wells of salvation. Isaiah 12:2, 3'},
    // tslint:disable-next-line: max-line-length
    { id: 79, reference: 'II Corinthians 9:8	', text: 'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. II Corinthians 9:8'},
    // tslint:disable-next-line: max-line-length
    { id: 80, reference: 'Matthew 5:6	', text: 'Blessed are they which do hunger and thirst after righteousness: for they shall be filled. Matthew 5:6'},
    // tslint:disable-next-line: max-line-length
    { id: 81, reference: 'Proverbs 3:5,6', text: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths. Proverbs 3:5, 6'},
    // tslint:disable-next-line: max-line-length
    { id: 82, reference: 'Psalm 32:8	', text: 'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye. Psalm 32:8'},
    // tslint:disable-next-line: max-line-length
    { id: 83, reference: 'Isaiah 30:21	', text: 'And thine ears shall hear a word behind thee, saying, This is the way, walk ye in it, when ye turn to the right hand, and when ye turn to the left. Isaiah 30:21'},
    // tslint:disable-next-line: max-line-length
    { id: 84, reference: 'Philippians 4:6, 7	', text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. Philippians 4:6, 7'},
    // tslint:disable-next-line: max-line-length
    { id: 85, reference: 'Isaiah 46:10, 11	', text: 'My counsel shall stand, and I will do all my pleasure: I have spoken it, I will also bring it to pass; I have purposed it, I will also do it. Isaiah 46:10, 11'},
    { id: 86, reference: '1 Thessalonians 5:24	', text: 'Faithful is he that calleth you, who also will do it. 1 Thessalonians 5:24'},
    { id: 87, reference: 'Philippians 4:13	', text: 'I can do all things through Christ which strengtheneth me. Philippians 4:13'},
    // tslint:disable-next-line: max-line-length
    { id: 88, reference: 'Hebrews 13:6	', text: 'So that we may boldly say, The Lord is my helper, and I will not fear what man shall do unto me. Hebrews 13:6'},
    // tslint:disable-next-line: max-line-length
    { id: 89, reference: 'Hebrews 10:35,36	', text: 'Cast not away therefore your confidence, which hath great recompence of reward. For ye have need of patience, that, after ye have done the will of God, ye might receive the promise. Hebrews 10:35,36'},
    // tslint:disable-next-line: max-line-length
    { id: 90, reference: 'Philippians 1:6	', text: 'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ. Philippians 1:6'},
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: max-line-length
    { id: 91, reference: 'Habakkuk 3:19	', text: 'The Lord God is my strength, and he will make my feet like hinds" feet, and he will make me to walk upon mine high places. Habakkuk 3:19'},
    { id: 92, reference: 'Romans 8:37	', text: 'Nay, in all these things we are more than conquerors through him that loved us. Romans 8:37'},
    // tslint:disable-next-line: max-line-length
    { id: 93, reference: '1 John 5:14	', text: 'And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us. 1 John 5:14'},
    // tslint:disable-next-line: max-line-length
    { id: 94, reference: 'Deutoronomy 28: 4	', text: 'Blessed shall be the fruit of thy body, and the fruit of thy ground, and the fruit of thy cattle, the increase of thy kine, and the flocks of thy sheep. Deutoronomy 28: 4'},
    // tslint:disable-next-line: max-line-length
    { id: 95, reference: 'Deutoronomy 28: 5-6	', text: 'Blessed shall be thy basket and thy store. Blessed shalt thou be when thou comest in, and blessed shalt thou be when thou goest out. Deutoronomy 28: 5-6'},
    // tslint:disable-next-line: max-line-length
    { id: 96, reference: 'Deuteronomy 28:8	', text: 'The Lord shall command the blessing upon thee in thy storehouses, and in all that thou settest thine hand unto; and he shall bless thee in the land which the Lord thy God giveth thee. Deuteronomy 28:8'},
    // tslint:disable-next-line: max-line-length
    { id: 97, reference: 'Deutoronomy 28: 11	', text: 'And the Lord shall make thee plenteous in goods, in the fruit of thy body, and in the fruit of thy cattle, and in the fruit of thy ground, in the land which the Lord sware unto thy fathers to give thee. Deutoronomy 28: 11'},
    // tslint:disable-next-line: max-line-length
    { id: 98, reference: 'Deutoronomy 28: 12	', text: 'The Lord shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow. Deutoronomy 28: 12'},
    // tslint:disable-next-line: max-line-length
    { id: 99, reference: 'Deuteronomy 28:13	', text: 'And the Lord shall make thee the head, and not the tail; and thou shalt be above only, and thou shalt not be beneath. Deuteronomy 28:13'},
    // tslint:disable-next-line: max-line-length
    { id: 100, reference: 'Jeremiah 32:40	', text: 'And I will make an everlasting covenant with them, that I will not turn away from them, to do them good; but I will put my fear in their hearts, that they shall not depart from me. Jeremiah 32:40'},
    // tslint:disable-next-line: max-line-length
    { id: 101, reference: 'Psalm 138:8	', text: 'The Lord will perfect that which concerneth me: thy mercy, 0 Lord, endureth for ever: forsake not the works of thine own hands. Psalm 138:8'},
    // tslint:disable-next-line: max-line-length
    { id: 102, reference: 'II Chronicles 16:9	', text: 'For the eyes of the Lord run to and fro throughout the whole earth; to shew himself strong in the behalf of them whose heart is perfect toward him. II Chronicles 16:9'},
    // tslint:disable-next-line: max-line-length
    { id: 103, reference: 'Deuteronomy 1:30	', text: 'The Lord your God which goeth before you, he shall fight for you, according to all that he did for you in Egypt before your eyes. Deuteronomy 1:30'},
    // tslint:disable-next-line: max-line-length
    { id: 104, reference: 'II Thessalonians 3:3	', text: 'But the Lord is faithful, who shall stablish you, and keep you from evil. II Thessalonians 3:3'},
    // tslint:disable-next-line: max-line-length
    { id: 105, reference: 'Deuteronomy 33:27	', text: 'The eternal God is thy refuge, underneath are the everlasting arms: and he shall thrust out the enemy from before thee; and shall say, Destroy them. Deuteronomy 33:27'},
    // tslint:disable-next-line: max-line-length
    { id: 106, reference: 'Philippians 1:6	', text: 'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ. Philippians 1:6'},
    // tslint:disable-next-line: max-line-length
    { id: 107, reference: 'II Corinthians 9:8	', text: 'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. II Corinthians 9:8'},
    // tslint:disable-next-line: max-line-length
    { id: 108, reference: 'Philippians 4:19	', text: 'But my God shall supply all your need according to his riches in glory by Christ Jesus. Philippians 4:19'},
    // tslint:disable-next-line: max-line-length
    { id: 109, reference: 'Mark 11:24	', text: 'Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive, them, and ye shall have them. Mark 11:24'},
    // tslint:disable-next-line: max-line-length
    { id: 110, reference: 'Ephesians 1:3	', text: 'Blessed by the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ. Ephesians 1:3'},
    // tslint:disable-next-line: max-line-length
    { id: 111, reference: 'John 15:7	', text: 'If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you. John 15:7'},
    // tslint:disable-next-line: max-line-length
    { id: 112, reference: 'John 14:13	', text: 'And whatsoever ye shall ask in my name, that will I do, that the Father, may be glorified, in the Son. John 14:13'},
    // tslint:disable-next-line: max-line-length
    { id: 113, reference: 'John 16:23, 24	', text: 'And in that day ye shall ask me nothing. Verily, verily, I say unto you, Whatsoever ye shall ask the Father in my name, he will give it you. John 16:23, 24'},
    { id: 114, reference: 'Matthew 21:22	', text: 'And all things, whatsoever ye shall ask in prayer, believing, ye shall receive. Matthew 21:22'},
    // tslint:disable-next-line: max-line-length
    { id: 115, reference: 'Matthew 5:6	', text: 'Blessed are they which do hunger and thirst after righteousness: for they shall be filled. Matthew 5:6'},
    { id: 116, reference: 'Psalm 37:4	', text: 'Delight thyself also in the Lord; and he shall give thee the desires of thine heart. Psalm 37:4'},
    { id: 117, reference: 'Psalm 107:9	', text: 'For he satisfieth the longing soul, and filleth the hungry soul with goodness. Psalm 107:9'},
     // tslint:disable-next-line: max-line-length
    { id: 118, reference: 'Psalm 103:5	', text: 'Who satisfieth thy mouth with good things; so that thy youth is renewed like the eagle"s. Psalm 103:5'},
    // tslint:disable-next-line: max-line-length
    { id: 119, reference: 'Joel 2:26	', text: 'And ye shall eat in plenty, and be satisfied, and praise the name of the Lord your God, that hath dealt wondrously with you: and my people shall never be ashamed. Joel 2:26'},
     // tslint:disable-next-line: max-line-length
    { id: 120, reference: 'Philippians 4:19	', text: 'But my God shall supply all your need according to his riches in glory by Christ Jesus. Philippians 4:19'},
    { id: 121, reference: 'Philippians 4: 13	', text: 'I can do all things through Christ which strengtheneth me. Philippians 4: 13'},
    { id: 122, reference: 'Romans 8:37	', text: 'Nay, in all these things we are more than conquerors through him that loved us. Romans 8:37'},
     // tslint:disable-next-line: max-line-length
    { id: 123, reference: 'John 15:7	', text: 'If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you. John 15:7'},
    { id: 124, reference: 'John 16:24	', text:  'Ask and ye shall receive, that your joy may be full. John 16:24'},
    { id: 125, reference: 'Matthew 21:22	', text:  'And all things, whatsoever ye shall ask in prayer, believing, ye shall receive. Matthew 21:22'},
    // tslint:disable-next-line: max-line-length
    { id: 126, reference: 'Mark 11:24	', text:  'Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them. Mark 11:24'},
    // tslint:disable-next-line: max-line-length
    { id: 127, reference: 'Ephesians 1:3	', text:  'Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ. Ephesians 1:3'},
    // tslint:disable-next-line: max-line-length
    { id: 128, reference: '1 John 3:22	', text:  'And whatsoever we ask, we receive of him, because we keep his commandments, and do those things that are pleasing in his sight. 1 John 3:22'},
    // tslint:disable-next-line: max-line-length
    { id: 129, reference: 'Ephesians 3:20, 21	', text:  'Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us, Unto him be glory in the church by Christ Jesus throughout all ages, world without end. Amen. Ephesians 3:20, 21'},
    // tslint:disable-next-line: max-line-length
    { id: 130, reference: 'II Corinthians 9:8	', text:  'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. II Corinthians 9:8'},
     // tslint:disable-next-line: max-line-length
    { id: 131, reference: 'Psalm 68:19	', text:  'Blessed be the Lord, who daily loadeth us with benefits, even the God of our salvation. Selah. Psalm 68:19'},
     // tslint:disable-next-line: max-line-length
    { id: 132, reference: 'Psalm 32:8	', text:  'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye. Psalm 32:8'},
    // tslint:disable-next-line: max-line-length
    { id: 133, reference: 'Isaiah 30:21	', text:  'And thine ears shall hear a word behind thee, saying, This is the way, walk ye in it, when ye turn to the right hand, and when ye turn to the left. Isaiah 30:21'},
    { id: 134, reference: 'Isaiah 30:15	', text:  'In quietness and in confidence shall be your strength. Isaiah 30:15'},
    { id: 135, reference: 'Nehemiah 8:10	', text:  'The joy of the Lord is your strength. Nehemiah 8:10'},
    { id: 136, reference: 'Philippians 4:13	', text:  'I can do all things through Christ which strengtheneth me. Philippians 4:13'},
    { id: 137, reference: 'Proverbs 3:4	', text:  'So shalt thou find favour and good understanding in the sight of God and man. Proverbs 3:4'},
    // tslint:disable-next-line: max-line-length
    { id: 138, reference: 'Psalm 84: 11	', text:  'For the Lord God is a sun and shield: the Lord will give grace and glory: no good thing will he withhold from them that walk uprightly. Psalm 84: 11'},
    // tslint:disable-next-line: max-line-length
    { id: 139, reference: 'Psalm 115:12, 13	', text:  'The Lord hath been mindful of us: he will bless us; he will bless the house of Israel; he will bless the house of Aaron. He will bless them that fear the Lord, both small and great. Psalm 115:12, 13'},
    { id: 140, reference: '1 Thessalonians 5:24	', text:  'Faithful is he that calleth you, who also will do it. 1 Thessalonians 5:24'},
     // tslint:disable-next-line: max-line-length
    { id: 141, reference: 'III John 2	', text:  'Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth. III John 2'},
    // tslint:disable-next-line: max-line-length
    { id: 142, reference: 'Deuteronomy 28:12	', text:  'The Lord shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow. Deuteronomy 28:12'},
    // tslint:disable-next-line: max-line-length
    { id: 143, reference: 'Deuteronomy 29:9	', text:  'Keep therefore the words of this covenant, and do them, that ye may prosper in all that ye do. Deuteronomy 29:9'},
    { id: 144, reference: 'Exodus 33:14', text:  'My Presence will go with you, and I will give you rest”. Exodus 33:14'},
    { id: 145, reference: 'Joshua 1:9	', text:  'The Lord your God will be with you wherever you go. Joshua 1:9'},
    { id: 146, reference: 'Psalm 37:4	', text:  'Delight yourself in the Lord and he will give you the desires of your heart. Psalm 37:4'},
    // tslint:disable-next-line: max-line-length
    { id: 147, reference: 'Philippians 4:19	', text:  'But my God shall supply all your need according to his riches in glory by Christ Jesus. Philippians 4:19'},
    // tslint:disable-next-line: max-line-length
    { id: 148, reference: 'Matthew 6:33	', text:  'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you. Matthew 6:33'},
    { id: 149, reference: 'Jeremiah 31:14	', text:  'And my people shall be satisfied with my goodness, saith the Lord. Jeremiah 31:14'},
    // tslint:disable-next-line: max-line-length
    { id: 150, reference: 'II Corinthians 9:8	', text:  'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. II Corinthians 9:8'},
    // tslint:disable-next-line: max-line-length
    { id: 151, reference: 'Proverbs 3:5, 6	', text:  'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths. Proverbs 3:5, 6'},
     // tslint:disable-next-line: max-line-length
    { id: 152, reference: 'Psalm 32:8	', text:  'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye. Psalm 32:8'},
    { id: 153, reference: '1 Thessalonians 5:24	', text:  'Faithful is he that calleth you, who also will do it. 1 Thessalonians 5:24'},
    // tslint:disable-next-line: max-line-length
    { id: 154, reference: 'Philippians 1:6	', text:  'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ. Philippians 1:6'},
    { id: 155, reference: 'Proverbs 3:26	', text:  'For the Lord shall be thy confidence, and shall keep thy foot from being taken. Proverbs 3:26'},
    // tslint:disable-next-line: max-line-length
    { id: 156, reference: 'II Corinthians 9:8', text: 'God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. II Corinthians 9:8'},
    // tslint:disable-next-line: max-line-length
    { id: 157, reference: 'Psalm 138:8	', text:  'The Lord will perfect that which concerneth me: thy mercy, 0 Lord, endureth for ever. Psalm 138:8'},
    // tslint:disable-next-line: max-line-length
    { id: 158, reference: 'Psalm 68:19	', text:  'Blessed be the Lord, who daily loadeth us with benefits, even the God of our salvation. Selah. Psalm 68:19'},
    // tslint:disable-next-line: max-line-length
    { id: 159, reference: 'II Thessalonians 3:3	', text:  'But the Lord is faithful, who shall stablish you, and keep you from evil. II Thessalonians 3:3'},
    { id: 160, reference: 'Deuteronomy 1:30	', text:  'The Lord your God which goeth before you, he shall fight for you. Deuteronomy 1:30'},
    // tslint:disable-next-line: max-line-length
    { id: 161, reference: 'Zephaniah 3:17', text:  '	The Lord thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing. Zephaniah 3:17'},
    // tslint:disable-next-line: max-line-length
    { id: 162, reference: 'Deuteronomy 33:27', text: 'The eternal God is thy refuge, underneath are the everlasting arms: and he shall thrust out the enemy from before thee. Deuteronomy 33:27'},
    // tslint:disable-next-line: max-line-length
    { id: 163, reference: 'John 14:13',  text: 'And whatsoever ye shall ask in my name, that will I do, that the Father, may be glorified, in the Son. John 14:13'},
    // tslint:disable-next-line: max-line-length
    { id: 164, reference: 'Psalm 103:5', text: 'Who satisfieth thy mouth with good things; so that thy youth is renewed like the eagle"s. Psalm 103:5'},
    // tslint:disable-next-line: max-line-length
    { id: 165, reference: 'Genesis 28:1', text: 'And, behold, I am with thee, and will keep thee in all places whither thou goest, and will bring thee again into this land; for I will not leave thee, until I have done that which I have spoken to thee of. Genesis 28:1'},
    { id: 166, reference: '1 Thessalonians', text: '5:24	Faithful is he that calleth you, who also will do it. 1 Thessalonians 5:24'},
    // tslint:disable-next-line: max-line-length
    { id: 167, reference: 'Joshua 1:8', text:  'This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night.. for then thou shalt make thy way prosperous, and then thou shalt have good success. Joshua 1:8'},
    // tslint:disable-next-line: max-line-length
    { id: 168, reference: 'Isaiah 65:24', text: 'And it shall come to pass, that before they call, I will answer; and while they are yet speaking, I will hear. Isaiah 65:24'},
    { id: 169, reference: 'Psalm 37:34', text: 'Wait on the LORD, and keep his way, and he shall exalt thee to inherit the land. Psalm 37:34'},
    { id: 170, reference: 'Psalm 91:16	', text: 'With long life will I satisfy him, and shew him my salvation. Psalm 91:16'},
     // tslint:disable-next-line: max-line-length
    { id: 171, reference: 'Psalm 29:11', text: 'The LORD will give strength unto his people; the LORD will bless his people with peace. Psalm 29:11'},
    { id: 172, reference: 'Psalm 37:23', text: 'The steps of a good man are ordered by the LORD: and he delighteth in his way. Psalm 37:23'},
     // tslint:disable-next-line: max-line-length
    { id: 173, reference: 'Psalm 128:2', text: 'Thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee. Psalm 128:2'},
    // tslint:disable-next-line: max-line-length
    { id: 174, reference: 'Deuteronomy 7:13', text: 'He will love thee, and bless thee, and multiply thee: he will also bless the fruit of thy womb. Deuteronomy 7:13'},
    { id: 175, reference: 'Deuteronomy 30:9', text:	'And the LORD thy God will make thee plenteous in every work of thine hand. Deuteronomy 30:9'},
    // tslint:disable-next-line: max-line-length
    { id: 176, reference: 'Deuteronomy 26:11', text: 'And thou shalt rejoice in every good thing which the LORD thy God hath given unto thee, and unto thine house. Deuteronomy 26:11'},
    { id: 177, reference: 'Deuteronomy 7:13', text: 'He will love thee, and bless thee, and multiply thee. Deuteronomy 7:13'}
  ];

    constructor(private http: HttpClient){ }

      data =
       {id: 0,
       name: {},
       age: 0,
       surname: '',
       email: ''}
    ;

    getUsers(){
        let getUrl = `${this.url}/users/`;
        return this.http.get(getUrl);
    }

    createUser(user: User){
        let saveUrl =  `${this.url}/users/`;
        return this.http.post(saveUrl, user);
    }

    updateUser(id: number, user: User) {
       return this.http.post(`${this.url}/users/`, user);
    }

    deleteUser(id: number){
        return this.http.delete(`${this.url}/users/${id}`);
    }


    revealPromiseVerse(language:string){

      var min = 1;
      var max = 177;
      var randonNumber =  Math.floor((Math.random()*max) + min);

      console.log('Random Number'+randonNumber);
      var verse  = this.promiseVerses.find(lineItem => lineItem.id == randonNumber);
      console.log('Promise Verse'+ verse.reference)

      console.log('Selected Language'+language);

      if(language === 'english'){
        return verse;
      }else{
        return this.teluguPromiseVerses[0];
      }
    }
}
