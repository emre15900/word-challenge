import React from "react";
import OtpInput from "react-otp-input";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/global.module.css";
import {
  Button,
  CircularProgress,
  Modal,
  Typography,
  Popover,
  Alert,
  Stack,
  Grid,
  useMediaQuery,
} from "@mui/material";

interface Word {
  id: number;
  img: string;
  word: string;
  answer: string;
}

const words: readonly Word[] = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/closeup-view-twocar-collision_157027-3862.jpg?t=st=1707671064~exp=1707674664~hmac=5edcf44b3345b3f573f26a60b694e7855d639a51ff161420a675313cbde6f3cf&w=2000",
    word: "Accident",
    answer: "kaza",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/view-funny-monkey-human-clothing_23-2150758516.jpg?t=st=1707671201~exp=1707674801~hmac=dc720e54c46888aa36e3c1be56e50a56eba8c38baf0f8e1e902a4f042450ebde&w=826",
    word: "Hilarious",
    answer: "komik",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/grilled-fillet-steak-rustic-meal-wood-generated-by-ai_188544-22196.jpg?t=st=1707671236~exp=1707674836~hmac=56b4608a2b52165779e7a5bb847064d95db1e3ce6adaef398de6380168d5ee46&w=2000",
    word: "Chop",
    answer: "kesmek",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/fast-fashion-concept-with-piles-clothes_23-2150871130.jpg?t=st=1707671324~exp=1707674924~hmac=90df44b3abc83d171c9f56fa8a3d02281085e07ed2c1ae51e1fb43f4b8470b41&w=740",
    word: "Various",
    answer: "Çeşitlilik",
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-photo/painting-person-suffering-from-anxiety_23-2150859253.jpg?t=st=1707671390~exp=1707674990~hmac=130ad241a22fd7fd932b9f4f92f711d8e35b9c404d1bfdd88d632862ccba3db1&w=1800",
    word: "Suddenly",
    answer: "Birdenbire",
  },
  {
    id: 6,
    img: "https://img.freepik.com/free-photo/fast-fashion-concept-with-full-clothing-store_23-2150871144.jpg?t=st=1707672304~exp=1707675904~hmac=75afeb680a96bb1050f3ef717379e310c14b2ed3e635b445d0e51f6abe297329&w=2000",
    word: "Arrange",
    answer: "Düzenlemek",
  },
  {
    id: 7,
    img: "https://img.freepik.com/premium-photo/burning-temperature-table-black-background_1417-21824.jpg?w=1800",
    word: "Temperature",
    answer: "Sıcaklık",
  },
  {
    id: 8,
    img: "https://img.freepik.com/free-photo/group-people-peak-mountain-climbing-helping-team-work_587448-5088.jpg?t=st=1707672376~exp=1707675976~hmac=0d8dc08730da3088735b7dd4fb9176a3061233b07c341ecade101dc10bae2e12&w=1800",
    word: "Reach",
    answer: "Ulaşmak",
  },
  {
    id: 9,
    img: "https://img.freepik.com/free-photo/heap-wealth-success-growth-generated-by-ai_188544-15209.jpg?t=st=1707672397~exp=1707675997~hmac=0fad0603ae43a1ad4f1f5cd5e09b526b7b251312ed0bf314d778e84ce80c08b4&w=2000",
    word: "Budget",
    answer: "Bütçe",
  },
  {
    id: 10,
    img: "https://img.freepik.com/free-photo/portrait-happy-couple-with-dog_23-2151030075.jpg?t=st=1707672424~exp=1707676024~hmac=46a09ff8a8273c06e5f414596db4966add0b56285db4eb3ea1bb8f911ed09008&w=2000",
    word: "Snuggle",
    answer: "Sarılmak",
  },
  {
    id: 11,
    img: "https://img.freepik.com/free-photo/silhouette-animals-flying-mid-air-sunset-generated-by-ai_188544-34831.jpg?t=st=1707672454~exp=1707676054~hmac=b581c098470727966ec9868a5c4cc523e4b03c823d89bb27f7d53fc75806191d&w=2000",
    word: "Swarm",
    answer: "Sürü",
  },
  {
    id: 12,
    img: "https://img.freepik.com/premium-photo/golden-coin-stack-with-red-arrow_410516-8750.jpg?w=1800",
    word: "Raise",
    answer: "Yükseltmek",
  },
  {
    id: 13,
    img: "https://img.freepik.com/free-photo/close-up-person-suffering-from-anxiety_23-2150859436.jpg?t=st=1707672517~exp=1707676117~hmac=d342a0c495f3fb6c3204ca57bab2a282ebf3bcc8130f58e36a2f9e9d373c5d86&w=1800",
    word: "Dizziness",
    answer: "Baş Dönmesi",
  },
  {
    id: 14,
    img: "https://img.freepik.com/premium-photo/bank-robbery_721243-4088.jpg?w=1060",
    word: "Burglar",
    answer: "Hırsız",
  },
  {
    id: 15,
    img: "https://img.freepik.com/premium-photo/handcuffs-with-dark-background_832479-6688.jpg?w=1800",
    word: "Handcuffs",
    answer: "Kelepçe",
  },
  {
    id: 16,
    img: "https://img.freepik.com/free-photo/majestic-hawk-spreads-wings-tranquil-autumn-sunset-generated-by-ai_24640-100797.jpg?t=st=1707672666~exp=1707676266~hmac=d51d99deaf082f5a1f35b9995156a90349497232de7399718a69e449f2bbe087&w=2000",
    word: "Release",
    answer: "Serbest Bırakmak",
  },
  {
    id: 17,
    img: "https://img.freepik.com/free-photo/mountain-exploration-photography_1409-5380.jpg?t=st=1707672689~exp=1707676289~hmac=edcd21b6bfc31410a073b958cec296b9127872200104ac903c1c355ea3cd8f7d&w=1800",
    word: "Explore",
    answer: "Keşfetmek",
  },
  {
    id: 18,
    img: "https://img.freepik.com/free-photo/businessman-sitting-table-conference-room-business-success-concept_1142-51789.jpg?t=st=1707672742~exp=1707676342~hmac=a9eb6d2602d73d97d4bd68c4ebd231da889806538835d32d2e8a5cde95233073&w=740",
    word: "Candidate",
    answer: "Aday",
  },
  {
    id: 19,
    img: "https://img.freepik.com/free-photo/broken-heart-studio_23-2150967118.jpg?t=st=1707665615~exp=1707669215~hmac=172f97616e5591615f69c9ba63c4266a0fc71620af08486f08bf74c30fcf7cac&w=1800",
    word: "Hurt",
    answer: "incinmek",
  },
  {
    id: 20,
    img: "https://img.freepik.com/free-photo/cute-schoolgirl-reading-book-surrounded-by-wisdom-generated-by-ai_188544-20006.jpg?t=st=1707672798~exp=1707676398~hmac=fbf6246409ff0d171d767c5744fd409b670a67c6fdef7b714394b4a95201cb4a&w=2000",
    word: "Prepare",
    answer: "Hazırlanmak",
  },
  {
    id: 21,
    img: "https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497283.jpg?t=st=1707672818~exp=1707676418~hmac=2d5bac55d9fee240af20b3a61af89997986118de02fe542ad42e9e2163aafce0&w=1800",
    word: "Accommodation",
    answer: "Konaklama",
  },
  {
    id: 22,
    img: "https://img.freepik.com/free-photo/free-photo-beauty-product-bottle-mockup-image-with-background_1340-31504.jpg?t=st=1707672913~exp=1707676513~hmac=3749b0b49efe3f256398907f52fb0113fe64c36b89ebe8b3a6ca51601b093093&w=1800",
    word: "Thick",
    answer: "Kalın",
  },
  {
    id: 23,
    img: "https://img.freepik.com/free-photo/condiment-flavor-based-chili-pepper_23-2151011113.jpg?t=st=1707672939~exp=1707676539~hmac=d523a09061a2c37cb73fb8edc474276934fc8cec015566d5a6bfb394ceb3f5c3&w=826",
    word: "Spicy",
    answer: "Baharatlı",
  },
  {
    id: 24,
    img: "https://img.freepik.com/free-photo/person-front-doors_23-2151112919.jpg?t=st=1707672968~exp=1707676568~hmac=d6183390a851058e66adb080b2eb3f11789338c19b8c373bd36ab43f009d43fc&w=1800",
    word: "Condition",
    answer: "Koşul",
  },
  {
    id: 25,
    img: "https://img.freepik.com/free-photo/side-view-scary-character-posing_23-2150701074.jpg?t=st=1707663689~exp=1707667289~hmac=c306c4e8be838c07d7fe3b2a7f264d604db7a26ca11b3e6a6ff6dfeca4fd185c&w=2000",
    word: "Severe",
    answer: "Şiddetli",
  },
  {
    id: 26,
    img: "https://img.freepik.com/free-photo/person-wearing-futuristic-virtual-reality-glasses-gaming_23-2151133161.jpg?t=st=1707773223~exp=1707776823~hmac=4d2d54e2983495a910b662f16ef474f9307b270d50628269624ade87d9f51ae8&w=1480",
    word: "Loose",
    answer: "Gevşetmek",
  },
  {
    id: 27,
    img: "https://img.freepik.com/free-photo/delivery-man-is-carrying-box-that-says-s-it_1340-37419.jpg?t=st=1707673149~exp=1707676749~hmac=0387344f3fc006628abf8cbd256d41c408a7d844d55479a5418d988e29dcb4e7&w=1060",
    word: "Carry",
    answer: "taşımak",
  },
  {
    id: 28,
    img: "https://img.freepik.com/free-photo/man-puts-ballot-ballot-box-closeup-voting-elections-candidates-defending-rights_166373-5968.jpg?t=st=1707673224~exp=1707676824~hmac=f2a7cafd68beb7de6e92bb163509272eddfc3a29997dbd0940b500f6b91aef95&w=1800",
    word: "Vote",
    answer: "Oy",
  },
  {
    id: 29,
    img: "https://img.freepik.com/free-photo/man-stands-ledge-front-cityscape_188544-18516.jpg?t=st=1707631061~exp=1707634661~hmac=2da853df9676f11ab52372653e344784161b8f03604b2f56173b0277848c0b9f&w=2000",
    word: "Proud",
    answer: "Gururlu",
  },
  {
    id: 30,
    img: "https://img.freepik.com/free-photo/medium-shot-beautiful-woman-nature_23-2150726015.jpg?t=st=1707673271~exp=1707676871~hmac=d978f731605b0f7ae880467682eca7bc7a385bd205aa18a83636e2739a3d967c&w=1800",
    word: "Tribe",
    answer: "Kabile",
  },
  {
    id: 31,
    img: "https://img.freepik.com/free-photo/ai-generated-cute-girl-pic_23-2150649870.jpg?t=st=1707673291~exp=1707676891~hmac=0ba9a6edbb62d992fa062f7f8f8083db9dee5d90ccc7cdd4731be17d588b3943&w=826",
    word: "Cheek",
    answer: "Yanak",
  },
  {
    id: 32,
    img: "https://img.freepik.com/premium-photo/bank-robbery_721243-4088.jpg?w=1060",
    word: "Thief",
    answer: "Hırsız",
  },
  {
    id: 33,
    img: "https://img.freepik.com/free-photo/deity-ancient-greek-temple_23-2151008416.jpg?t=st=1707673325~exp=1707676925~hmac=905ea7f1b13733f14da8a963e553cbe3471ed27f3a44bd89506f6cfb14014e6f&w=1800",
    word: "Bride",
    answer: "Gelin",
  },
  {
    id: 34,
    img: "https://img.freepik.com/free-photo/confident-businessman-holding-jacket-standing-black-background-generated-by-ai_188544-29233.jpg?t=st=1707673345~exp=1707676945~hmac=7584c87ae98bef5336c5ce1bb7ba9e3057f73ba3acc34ddbaee6581b049e36e9&w=2000",
    word: "Formal",
    answer: "Resmi",
  },
  {
    id: 35,
    img: "https://img.freepik.com/free-photo/view-professional-handshake-business-people_23-2150917090.jpg?t=st=1707673377~exp=1707676977~hmac=3a3474ed468305b3aaf68efd69e0aa870835c3131b32dfe234bb1475673e0e78&w=1060",
    word: "Greet",
    answer: "Selamlaşmak",
  },
  {
    id: 36,
    img: "https://img.freepik.com/free-photo/strawberry-milkshake-black-background_1268-25079.jpg?t=st=1707673401~exp=1707677001~hmac=7801fc5073dc4c54f57011a5710d09f46e223b135a0bd490b8f735393cd3b23d&w=1800",
    word: "Shake",
    answer: "Sallamak",
  },
  {
    id: 37,
    img: "https://img.freepik.com/premium-photo/silver-whisk-with-transparent-setting_1024117-9994.jpg?w=1800",
    word: "Whisk",
    answer: "Çırpma Teli",
  },
  {
    id: 38,
    img: "https://img.freepik.com/free-photo/delicious-pizza-with-tomatoes_23-2150857784.jpg?t=st=1707673440~exp=1707677040~hmac=4eed4616782aa3995d0cbf54e7cb9a70fe7119efd733884754088c2695a33e22&w=2000",
    word: "Slice",
    answer: "Dilim",
  },
  {
    id: 39,
    img: "https://img.freepik.com/free-photo/coffe-splash-mug-black-background_123827-26338.jpg?t=st=1707651622~exp=1707655222~hmac=efd3a1a8a1d13a8d08d6d2b373bffeecf30159ae78f1cc2a95ad4b870955a6b1&w=1800",
    word: "Pour",
    answer: "Dökmek",
  },
  {
    id: 40,
    img: "https://img.freepik.com/free-photo/view-daunting-witches_23-2150674845.jpg?t=st=1707673479~exp=1707677079~hmac=938b646b179b9ffa0af91aadc95c0f6469d30e056328c50d4ebdbb4cfcca321e&w=2000",
    word: "Wicked",
    answer: "Kötü",
  },
  {
    id: 41,
    img: "https://img.freepik.com/free-photo/glass-bowl-with-gold-coins-inside-gold-bowl-with-words-gold-it_1340-28830.jpg?t=st=1707673517~exp=1707677117~hmac=ffd6b495fbae11f7f5636d577a1afc0bd4ad6193e2f590cc3b14f39011781206&w=1060",
    word: "Afford",
    answer: "Uygunluk",
  },
  {
    id: 42,
    img: "https://img.freepik.com/free-photo/rustic-wooden-table-old-workshop-forbidden-equipment-danger-generated-by-artificial-intelligence_188544-129167.jpg?t=st=1707673545~exp=1707677145~hmac=e471b275206ec8ab90f0c8c22680edd45005c95df44c86e1df1f167886cac88a&w=2000",
    word: "Attention",
    answer: "Dikkat",
  },
  {
    id: 43,
    img: "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038402.jpg?t=st=1707673566~exp=1707677166~hmac=44db54217a3a4b5d128d9ec5bebdf3d850cd04b4e4e6ee89f67d206ee33862ba&w=826",
    word: "Definitely",
    answer: "kesinlikle",
  },
  {
    id: 44,
    img: "https://img.freepik.com/free-photo/fresh-berry-cocktail-rustic-wooden-table-generated-by-ai_188544-13496.jpg?t=st=1707673606~exp=1707677206~hmac=cb439ca0983266fd9891224fb9c12ca38126d8c33afa5da0e2acdecb179cc469&w=2000",
    word: "Sip",
    answer: "Yudumlamak",
  },
  {
    id: 45,
    img: "https://img.freepik.com/free-photo/handwriting-paper-pen-ink-used-generated-by-ai_188544-44443.jpg?t=st=1707673627~exp=1707677227~hmac=485c8d657a675d27ff3d744384c03e244bb6087e0cf439567786f4d07bb2d1bb&w=2000",
    word: "Literate",
    answer: "Okuryazar",
  },
  {
    id: 46,
    img: "https://img.freepik.com/premium-photo/caucasian-doctor-holding-stethoscope-analyzing-paperwork-desk-office-generated-by-artificial-intelligence_24911-89099.jpg?w=2000",
    word: "Prescribe",
    answer: "Reçete",
  },
  {
    id: 47,
    img: "https://img.freepik.com/free-photo/large-cargo-ship-with-containers-generative-ai_188544-8160.jpg?t=st=1707673671~exp=1707677271~hmac=566db92ed1d0b272ff929250818c24dc5d5fcdd0e40724ea5b16c44a38408380&w=1800",
    word: "Contain",
    answer: "içermek",
  },
  {
    id: 48,
    img: "https://img.freepik.com/free-photo/front-view-spooky-character-posing_23-2150701098.jpg?t=st=1707673688~exp=1707677288~hmac=a5a5901bcdbaf58ee30ab7849d2313f2148cf1ef0b635a990feaaf9239ab3af2&w=2000",
    word: "Terrible",
    answer: "Korkunç",
  },
  {
    id: 49,
    img: "https://img.freepik.com/free-photo/doctor-from-future-concept_23-2151111213.jpg?t=st=1707681174~exp=1707684774~hmac=07480b121f8ff319a0e7efcd457e6f564e099288f2460ef31c7349e9573e7bb7&w=1800",
    word: "Patient",
    answer: "Hasta",
  },
  {
    id: 50,
    img: "https://img.freepik.com/free-photo/doctor-from-future-concept_23-2151111185.jpg?t=st=1707681200~exp=1707684800~hmac=d266f591dd7455f9372cb9f8c757f860fd46c6d71e4f5ea16233c03b3d30f5d0&w=826",
    word: "Surgery",
    answer: "Ameliyat",
  },
  {
    id: 51,
    img: "https://img.freepik.com/free-photo/modern-monitor-elegant-table_23-2150706413.jpg?t=st=1707681228~exp=1707684828~hmac=bae38e94fad245e494a5621df03297d19b22a74b1015bf90699c4ae9d4f60b19&w=1800",
    word: "Appointment",
    answer: "Randevu",
  },
  {
    id: 52,
    img: "https://img.freepik.com/free-photo/view-football-fan-enjoying-match_23-2150860613.jpg?t=st=1707681256~exp=1707684856~hmac=d706647ca843bb65fc7b6a0eb47936e6ad1b6cde5817ba36616d24e93e387408&w=1800",
    word: "Furious",
    answer: "öfkeli",
  },
  {
    id: 53,
    img: "https://img.freepik.com/free-photo/large-group-people-sitting-auditorium-watching-presentation-generated-by-ai_188544-55828.jpg?t=st=1707681298~exp=1707684898~hmac=158b0de767f33faa53ec99337be6e5db1e29e36ccc029d8eafb074ce505ae132&w=2000",
    word: "Participant",
    answer: "Katılımcı",
  },
  {
    id: 54,
    img: "https://img.freepik.com/free-photo/soccer-players-celebrating-victory-with-trophee_23-2150821488.jpg?t=st=1707681339~exp=1707684939~hmac=873bb53c13a98bbd14e5223cdb12a0e6022afd687b9b26603f90eff5fba33717&w=1060",
    word: "Competition",
    answer: "Rekabet",
  },
  {
    id: 55,
    img: "https://img.freepik.com/free-photo/ai-generated-cute-girl-pic_23-2150649856.jpg?t=st=1707681358~exp=1707684958~hmac=914ae6eaae389a419f2a3dd3d749ca061fad08c0487c1f17d6f1a0c56beaab0e&w=1800",
    word: "Lip",
    answer: "Dudak",
  },
  {
    id: 56,
    img: "https://img.freepik.com/free-photo/3d-rendering-hand-with-smartwatch_23-2150896578.jpg?t=st=1707681382~exp=1707684982~hmac=0e5493a2b09447028e8ddc411f28517aec1b265800e973f1b4d0470bada1a973&w=1480",
    word: "Wrist",
    answer: "Bilek",
  },
  {
    id: 57,
    img: "https://img.freepik.com/free-photo/portrait-person-with-depression_23-2151020506.jpg?t=st=1707681400~exp=1707685000~hmac=e2f765106806a37cec856083140bbe1b329a1cb7e261ffdd6b4f1a2a476635e1&w=1800",
    word: "Addicted",
    answer: "Bağımlı",
  },
  {
    id: 58,
    img: "https://img.freepik.com/premium-photo/orthopedic-doctor-care-investigates-patient-wound-arm-hand-finger-cover-by-splint-bandage-cast_114016-13117.jpg?w=1800",
    word: "Injured",
    answer: "Yaralı",
  },
  {
    id: 59,
    img: "https://img.freepik.com/free-photo/young-woman-smiling-nature-beauty-generated-by-ai_188544-42064.jpg?t=st=1707681458~exp=1707685058~hmac=6f9e7696b2c492edb92c4086d1c7f4a6573079f5a911fc1d6b91505836dc917a&w=2000",
    word: "Pleasant",
    answer: "Hoş",
  },
  {
    id: 60,
    img: "https://img.freepik.com/free-photo/portrait-sad-man_23-2150761662.jpg?t=st=1707663502~exp=1707667102~hmac=4c0cb7bd1c8fc846cc7fcf6adc04f7c22ab28250581b3d19ef3ebcf3804ecd78&w=1800",
    word: "Helpless",
    answer: "Çaresiz",
  },
  {
    id: 61,
    img: "https://img.freepik.com/free-photo/young-women-applying-facial-mask-pampering-generated-by-ai_188544-29163.jpg?t=st=1707681502~exp=1707685102~hmac=beba6c2fabe8c5860b33eea6a0ee777b773aa9a225f16a3306f9b2664ccb6d93&w=2000",
    word: "Peel",
    answer: "Soymak",
  },
  {
    id: 62,
    img: "https://img.freepik.com/premium-photo/close-up-zipper-with-gold-metal-pull-generative-ai_974546-63359.jpg?w=1060",
    word: "Zipper",
    answer: "fermuar",
  },
  {
    id: 63,
    img: "https://img.freepik.com/free-photo/view-3d-gavel-lawyer-s-day_23-2151023395.jpg?t=st=1707635282~exp=1707638882~hmac=c0a87b869216175884f06c12c63923f86a5f9fd124a2c4a477bdf031e4a62fbe&w=1800",
    word: "Court",
    answer: "mahkeme",
  },
  {
    id: 64,
    img: "https://img.freepik.com/free-photo/person-practicing-yoga-meditation-outdoors-nature_23-2150838320.jpg?t=st=1707681614~exp=1707685214~hmac=d6931bb6b08538288ab6594971d5e0ee3275147501ba1518639f7a001f060680&w=1800",
    word: "Peaceful",
    answer: "Huzurlu",
  },
  {
    id: 65,
    img: "https://img.freepik.com/free-photo/teamwork-strategy-lead-business-success-generated-by-ai_188544-40981.jpg?t=st=1707681645~exp=1707685245~hmac=7ba3cef5b2704c1b33e2aa3911a0f49d6fed9dbd37098de4f7aa94e7c3469abf&w=2000",
    word: "Suitable",
    answer: "Uygun",
  },
  {
    id: 66,
    img: "https://img.freepik.com/premium-photo/table-setting_974303-1308.jpg?w=1800",
    word: "Wedding",
    answer: "Düğün",
  },
  {
    id: 67,
    img: "https://img.freepik.com/free-photo/cozy-bedroom-with-soft-pillows-candlelight-generated-by-ai_188544-33035.jpg?t=st=1707667230~exp=1707670830~hmac=b8bf79bf1e6194ba99947b03216ee05ee57f5456da2a951cd509e9f5d595273c&w=2000",
    word: "Cosy",
    answer: "Rahat",
  },
  {
    id: 68,
    img: "https://img.freepik.com/premium-photo/crime-scene-tape-stretched-across-area_996136-563.jpg?w=1060",
    word: "Crime",
    answer: "suç",
  },
  {
    id: 69,
    img: "https://img.freepik.com/free-photo/caucasian-african-children-learn-friendship-success-generated-by-ai_188544-29239.jpg?t=st=1707681741~exp=1707685341~hmac=ff6a04ef7dc8d1c91d793442c857e0fc3c572021b821f87a9628ece62229b80d&w=2000",
    word: "Waving",
    answer: "Elsallamak",
  },
  {
    id: 70,
    img: "https://img.freepik.com/premium-photo/husband-wife-fighting-tense-face-american-people_826454-199.jpg?w=2000",
    word: "Whisper",
    answer: "fısıltı",
  },
  {
    id: 71,
    img: "https://img.freepik.com/free-photo/glowing-crystal-ball-held-by-young-woman-illuminates-futures-generated-by-ai_24640-93603.jpg?t=st=1707681876~exp=1707685476~hmac=e0b11507afd11df76beae40248b74cf45b7d40002d47223fe7a5e4597a066440&w=2000",
    word: "Prediction",
    answer: "Tahmin",
  },
  {
    id: 72,
    img: "https://img.freepik.com/free-photo/3d-heart-shape-with-crowd-people_23-2150965331.jpg?t=st=1707681951~exp=1707685551~hmac=21b52bfa2de9aefb2930d133cebf8dc9aa19b5dc56e34982e16ffa21cc0c92f9&w=2000",
    word: "Involve",
    answer: "DahilEtmek",
  },
  {
    id: 73,
    img: "https://img.freepik.com/free-photo/jar-gold-coins-is-table-with-dark-background_1340-28926.jpg?t=st=1707663934~exp=1707667534~hmac=573c6df911b54225844849c749511fe376c5747dda7d24a6732fd8ab2533cea0&w=1060",
    word: "Deposit",
    answer: "mevduat",
  },
  {
    id: 74,
    img: "https://img.freepik.com/free-photo/man-standing-old-wooden-floor_1204-213.jpg?w=1800&t=st=1707682036~exp=1707682636~hmac=8a1d85cacadb6b0e6c38ae1be799317c63718639959b080fb255e312d157c43c",
    word: "Stand",
    answer: "Ayakta Durmak",
  },
  {
    id: 75,
    img: "https://img.freepik.com/free-photo/silhouette-large-group-animals-motion-dusk-generated-by-ai_188544-55442.jpg?t=st=1707682076~exp=1707685676~hmac=a791e57a705f9189da5b60da0c2ea1546437c08f8417750ca23b5e5aa08d06b8&w=2000",
    word: "Flock",
    answer: "Sürü",
  },
  {
    id: 76,
    img: "https://img.freepik.com/free-photo/circular-arrows-refresh-icon-rotation-arrows-icon-sign-symbol-white-background-3d-illustration_56104-2006.jpg?w=1800&t=st=1708023426~exp=1708024026~hmac=de3ea494cd07a7a77459e671773bc5c9c74830ce3bfc77dc1a021779820df7cb",
    word: "Undo",
    answer: "Geri Alma",
  },
  {
    id: 77,
    img: "https://img.freepik.com/free-photo/view-dramatic-chess-pieces-with-man_23-2150844733.jpg?t=st=1707682179~exp=1707685779~hmac=63c6d7f70ad5fbaa6b5940f73c59fbb5b95778898da884b9cecb50143377b797&w=1060",
    word: "Determine",
    answer: "belirlemek",
  },
  {
    id: 78,
    img: "https://img.freepik.com/free-photo/confident-military-team-uniform-standing-outdoors-generated-by-ai_188544-24633.jpg?t=st=1707682201~exp=1707685801~hmac=18985dce53bee1be544e73d12f29dc709a2594dbdb39373f821b09f935531e14&w=2000",
    word: "Crew",
    answer: "Mürettebat",
  },
  {
    id: 79,
    img: "https://img.freepik.com/free-photo/man-front-computer-screen-with-graph-it_1340-35895.jpg?t=st=1707666484~exp=1707670084~hmac=8067feec6477538acb9516c93ba3204443ad6283c0721f240da2d05e9c29a4c4&w=1800",
    word: "Annual",
    answer: "Yıllık",
  },
  {
    id: 80,
    img: "https://img.freepik.com/premium-photo/taking-nap-his-chair-his-desk-generative-ai_971989-3235.jpg?w=1800",
    word: "Exhausting",
    answer: "Yorucu",
  },
  {
    id: 81,
    img: "https://img.freepik.com/free-photo/dirty-concrete-wall-old-building-feature-rusty-steel-window-generated-by-artificial-intelligence_188544-90005.jpg?t=st=1707682274~exp=1707685874~hmac=8f3ff0b09294997e5877b08ff5d31a4f40c954fd6860962ed82d68cb997bd0fc&w=2000",
    word: "Bump",
    answer: "Çarpmak",
  },
  {
    id: 82,
    img: "https://img.freepik.com/free-photo/futuristic-football-soccer-player-with-glowing-lights_23-2151152900.jpg?t=st=1707682307~exp=1707685907~hmac=7d9484d223894a9cb1428226250f9ff7082f84f6fececed95333c67c83a22003&w=1800",
    word: "Acted",
    answer: "Oyunculuk",
  },
  {
    id: 83,
    img: "https://img.freepik.com/free-photo/cartoon-tooth-monster-character_1409-6252.jpg?t=st=1707682374~exp=1707685974~hmac=2970b8f3d728954b09c7b42c276958352a7157926926be1335dfd041b222957a&w=900",
    word: "Silly",
    answer: "Aptalca",
  },
  {
    id: 84,
    img: "https://img.freepik.com/premium-photo/doctor-fighting-covid-virus-vaccine-vitro_888396-4211.jpg?w=1800",
    word: "Disease",
    answer: "hastalık",
  },
  {
    id: 85,
    img: "https://img.freepik.com/free-photo/books-with-brain-digital-art-style-education-day_23-2151164350.jpg?t=st=1707682410~exp=1707686010~hmac=dc4ce839b9568ed5a69626c21ba82194ffc17e9d632e13756ac0c6a422a3d850&w=1800",
    word: "Knowledge",
    answer: "Bilgi",
  },
  {
    id: 86,
    img: "https://img.freepik.com/free-photo/colorful-pills-spill-tempting-addiction-excess-generative-ai_188544-46325.jpg?t=st=1707682453~exp=1707686053~hmac=9b8c4a80e0f54137d7c04ba4bc71cfaca6515c267144feebd1f4f25c874e941e&w=2000",
    word: "Drug",
    answer: "uyuşturucu",
  },
  {
    id: 87,
    img: "https://img.freepik.com/free-photo/view-3d-house-model_23-2150761166.jpg?t=st=1707682475~exp=1707686075~hmac=63a441740e6b71f3ae4d9ab47e23b5ee4673fbd439fcf7547f2464602d204b9a&w=1060",
    word: "Property",
    answer: "gayrimenkul",
  },
  {
    id: 88,
    img: "https://img.freepik.com/free-photo/painting-person-suffering-from-anxiety_23-2150859312.jpg?t=st=1707682495~exp=1707686095~hmac=055648232993066b81642f0fcceff9026f68f798fdbf77da69abb813b3fb53b8&w=1800",
    word: "Unexpected",
    answer: "Beklenmedik",
  },
  {
    id: 89,
    img: "https://img.freepik.com/free-photo/portrait-medieval-king_23-2150932057.jpg?t=st=1707682523~exp=1707686123~hmac=2458c53501db54f4e907b0224d54f5e1dd87ac965282bf5e9b9ce553b350facc&w=2000",
    word: "Might",
    answer: "Güçlü",
  },
  {
    id: 90,
    img: "https://img.freepik.com/free-photo/close-up-person-suffering-from-anxiety_23-2150859418.jpg?t=st=1707682543~exp=1707686143~hmac=3384c77eb6450b48e4ec00059592bd361d93af30322d7a46da8465ee9fbae2f5&w=826",
    word: "Careless",
    answer: "Dikkatsiz",
  },
  {
    id: 91,
    img: "https://img.freepik.com/free-photo/view-3d-armchair-with-clouds_23-2151113493.jpg?t=st=1707682563~exp=1707686163~hmac=282366274c9641398d810338612ec74bce100e741eb8ee61a7f2351a29fe1738&w=826",
    word: "Seat",
    answer: "koltuk",
  },
  {
    id: 92,
    img: "https://img.freepik.com/free-photo/businessman-businesswoman-signing-contract-office-generated-by-ai_24640-87360.jpg?t=st=1707682716~exp=1707686316~hmac=8b4645ce35919a2b931771bbb48faadeed16b6fa201c6e9fb445b641342edd84&w=2000",
    word: "Admit",
    answer: "itiraf Etmek",
  },
  {
    id: 93,
    img: "https://img.freepik.com/free-photo/satellite-approaching-earth_1048-2422.jpg?w=996&t=st=1707682778~exp=1707683378~hmac=3e0a50b6f04010a86cc619ff64febef03f5fa73cd4fa861a2c0e3adb283a8ea3",
    word: "Approach",
    answer: "Yaklaşmak",
  },
  {
    id: 94,
    img: "https://img.freepik.com/free-photo/man-fishing-river_23-2148204177.jpg?w=826&t=st=1707682823~exp=1707683423~hmac=a03999818b677c9b0d8fad67e78194e53e7eceb875d7940eeda8044dc9e610af",
    word: "Catch",
    answer: "Yakalamak",
  },
  {
    id: 95,
    img: "https://img.freepik.com/free-photo/portrait-cow-field-with-dry-grass-blue-sky_384344-5045.jpg?t=st=1707682856~exp=1707686456~hmac=889bca16f528806f63c35ec7a67d12b1c6515b70faa88f1ee8364c5d46f546e7&w=2000",
    word: "Certain",
    answer: "kesin",
  },
  {
    id: 96,
    img: "https://img.freepik.com/free-photo/parent-elementary-school-student-go-hand-hand-light-background-back-school-concept_169016-4641.jpg?w=1800&t=st=1707682949~exp=1707683549~hmac=825fd00ff9ed101d1314a6d70307276a8f252c4db58d6c365ff0a6f588f2db6f",
    word: "former",
    answer: "önceki",
  },
  {
    id: 97,
    img: "https://img.freepik.com/free-photo/cylinder-metal-tanks-with-pressure-gauges-petrochemical-industry_60438-3639.jpg?t=st=1707682977~exp=1707686577~hmac=092a085128269bade7f6eec66396c4566c879e5d33e77a935eeee740da523592&w=2000",
    word: "Pressure",
    answer: "Basınç",
  },
  {
    id: 98,
    img: "https://img.freepik.com/free-photo/view-professional-business-people-working-together_23-2150917076.jpg?t=st=1707682997~exp=1707686597~hmac=02400d2847682bcbb84755de4899c308800235078d0ffb45aaf5e4d692ff6bfe&w=1060",
    word: "Represent",
    answer: "Temsil Etmek",
  },
  {
    id: 99,
    img: "https://img.freepik.com/free-photo/silhouettes-rush-through-crowded-city-streets-dusk-generated-by-ai_188544-24309.jpg?t=st=1707683029~exp=1707686629~hmac=9ec10c1126e4611b49a2eadc790c1b9e85f1b7bd282ff0e6092fed1372e16694&w=2000",
    word: "Society",
    answer: "Toplum",
  },
  {
    id: 100,
    img: "https://img.freepik.com/free-photo/close-up-person-suffering-from-anxiety_23-2150859408.jpg?t=st=1707683050~exp=1707686650~hmac=39aaaaee29834cc173197ce7b2f5d487d2afb974d2878a58d237c217040c6193&w=1800",
    word: "Violence",
    answer: "Şiddet",
  },
];

const STORAGE_KEY = "word_challenge_answers";

function HomePage() {
  const responsive = useMediaQuery("(max-width:728px)");

  const [otp, setOtp] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const currentWord = words[currentPage];

  const [isDisable, setIsDisable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedAnswers = localStorage.getItem(STORAGE_KEY);

    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers);
      const lastAnsweredPage = parsedAnswers[parsedAnswers.length - 1];
      setCurrentPage(lastAnsweredPage);

      if (parsedAnswers.length > 0) {
        setShowModal(true);
      }
    }
  }, []);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const notify = (answer: string) => {
    setIsDisable(true);

    toast(
      otp.toLocaleLowerCase() === answer.split(" ").join("").toLocaleLowerCase()
        ? "Congratulations correct answer!"
        : "Wrong answer try again!",
      {
        type:
          otp.toLocaleLowerCase() ===
          answer.split(" ").join("").toLocaleLowerCase()
            ? "success"
            : "error",
        position: "bottom-center",
        autoClose: 500,
      }
    );

    const clearOtp = setTimeout(() => {
      if (
        otp.toLocaleLowerCase() ===
        answer.split(" ").join("").toLocaleLowerCase()
      ) {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, words.length - 1));
        const savedAnswers = localStorage.getItem(STORAGE_KEY);
        const updatedAnswers = savedAnswers
          ? [...JSON.parse(savedAnswers), currentPage]
          : [currentPage];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAnswers));
      }
      setOtp("");
      setIsDisable(false);
    }, 1500);

    return () => clearTimeout(clearOtp);
  };

  const handleContinue = () => {
    setShowModal(false);
    setCurrentPage((prevPage) => Math.max(0, prevPage + 1));
  };

  const handleRestart = () => {
    setShowModal(false);
    localStorage.removeItem(STORAGE_KEY);
    setCurrentPage(0);
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "display-popover" : undefined;

  const showAnswer = currentWord.answer
    .trim()
    .split(/\s+/)
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const otpLength = currentWord.answer.split(" ").join("").length;

  return (
    <div style={{ width: "100%" }}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "center",
          mb: 2,
          mt: 2,
        }}
      >
        <Grid sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
          <img src="/img/w-word.png" width={50} alt="W" />
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            ord
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
          <img src="/img/c-word.png" width={50} alt="C" />
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            hallenge
          </Typography>
        </Grid>
      </Grid>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <div
          key={currentWord.id}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ width: 350 }}>
            <img
              src={currentWord.img}
              alt={currentWord.word}
              style={{
                borderRadius: "30px",
                marginTop: "30px",
                boxShadow: "0 0 10px 0 #000000",
                width: "100%",
                height: "250px",
                minWidth: "350px",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <Button aria-describedby={id} onClick={handleClick}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  cursor: "pointer",
                  color: "#000000",
                  textTransform: "none",
                }}
              >
                {currentWord.word}
              </Typography>
            </Button>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>{showAnswer}</Typography>
          </Popover>
          <div className={styles.otpInput}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={otpLength}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputType="text"
              shouldAutoFocus
              inputStyle={{
                width: "42px",
                height: "42px",
                margin: "0 10px",
                fontSize: "20px",
                borderRadius: 80,
                border: "1px solid rgba(0,0,0,0.3)",
                fontWeight: 800,
              }}
            />
          </div>
          <div>
            <Button
              type="submit"
              sx={{
                borderRadius: "50px",
                background: isDisable ? "#bbbbbb" : "#00e800",
                outline: 0,
                border: isDisable
                  ? "2px solid #bbbbbb"
                  : "1px solid rgb(4 201 4)",
                padding: "8px 3.5rem",
                fontSize: "17px",
                cursor: "pointer",
                marginTop: "20px",
                transition: "background 0.3s ease",
                color: "#000000",
                fontWeight: 500,
                textTransform: "none",
                "&:hover": {
                  background: isDisable ? "#bbbbbb" : "rgb(4 201 4)",
                },
              }}
              onClick={() => notify(currentWord.answer)}
              disabled={isDisable}
            >
              {isDisable ? (
                <CircularProgress size={24} sx={{ color: "#ffffff" }} />
              ) : (
                "Verify"
              )}
            </Button>

            <ToastContainer />
          </div>
          <div>
            <p style={{ fontWeight: 500 }}>
              <strong>{currentWord.id}</strong> / {words.length}
            </p>
          </div>
        </div>
      </form>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 1,
          mb: 2,
        }}
      >
        <Stack spacing={2}>
          <Alert severity="info">
            If you don&apos;t know the answer, click on the word!
          </Alert>
        </Stack>
      </Grid>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          border: "1px solid #000000",
        }}
      >
        <div
          style={{
            position: "absolute",
            maxWidth: "400px",
            width: "80%",
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "30px",
            border: "1px solid #000000",
            top: "50%",
            left: "48%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 10px 0 #000000",
          }}
        >
          <h2 id="modal-modal-title">Resume or Restart?</h2>
          <Typography id="modal-modal-description" sx={{ mb: 3 }}>
            Do you want to continue from where you left off or restart from the
            beginning?
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              onClick={handleRestart}
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                padding: responsive ? "8px 1.5rem" : "8px 2rem",
              }}
            >
              I&apos;ll start again
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleContinue}
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                padding: responsive ? "8px 2rem" : "8px 2.5rem",
              }}
            >
              I&apos;ll continue
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default HomePage;
