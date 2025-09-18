import json

# Compile comprehensive data about Sikkim monasteries for the website
monasteries_data = {
    "featured_monasteries": [
        {
            "id": "rumtek",
            "name": "Rumtek Monastery",
            "subtitle": "Dharma Chakra Centre - The Crown Jewel",
            "location": "24 km from Gangtok, East Sikkim",
            "established": "1740s (rebuilt 1960s)",
            "sect": "Karma Kagyu",
            "elevation": "1,500 meters",
            "significance": "Largest monastery in Sikkim, main seat of Karma Kagyu lineage in exile",
            "description": "Rumtek Monastery serves as the spiritual heart of Sikkim and is the largest monastery in the state. Originally built in the 16th century, it was reconstructed in the 1960s by the 16th Karmapa as his main seat in exile after fleeing Tibet. The monastery houses precious relics, texts, and statues brought from Tibet, including the entire 108-volume canon of Buddha's teachings.",
            "architecture": "Traditional Tibetan style with intricate murals, golden stupa, and elaborate decorations. Features a main prayer hall, retreat center, monastic college, and the jewel-studded Golden Stupa containing relics of the 16th Karmapa.",
            "highlights": [
                "Golden Stupa with remains of 16th Karmapa",
                "Karma Shri Nalanda Institute for Higher Buddhist Studies",
                "World's only complete set of Kangyur texts on handmade paper",
                "Traditional Tibetan architectural design",
                "Annual Cham dance during Losar (Tibetan New Year)"
            ],
            "visiting_info": {
                "timings": "9:00 AM - 6:00 PM (Monday-Friday)",
                "entry_fee": "Free",
                "best_time": "October to mid-December, March to June",
                "duration": "2-3 hours",
                "morning_prayer": "6:00 AM (visitors welcome)"
            },
            "festivals": ["Losar (Tibetan New Year)", "Cham Dance", "Saga Dawa"],
            "how_to_reach": "24 km from Gangtok by taxi or shared jeep. Regular transport available from Gangtok."
        },
        {
            "id": "pemayangtse",
            "name": "Pemayangtse Monastery",
            "subtitle": "Perfect Sublime Lotus",
            "location": "2 km from Pelling, West Sikkim",
            "established": "1705 AD",
            "sect": "Nyingma",
            "elevation": "2,085 meters",
            "significance": "One of oldest and premier monasteries, headquarters of Nyingma order in Sikkim",
            "description": "Founded by Lama Lhatsun Chempo in 1705, Pemayangtse means 'Perfect Sublime Lotus'. This three-storied monastery is one of the oldest in Sikkim and was meant only for 'ta-tshang' or pure monks. The monastery's head lama held the unique privilege of anointing the Chogyals (kings) of Sikkim with holy water.",
            "architecture": "Three-storied stone structure with traditional Tibetan design. Features colorfully painted doors and windows, intricate wood carvings, and the famous seven-tiered wooden sculpture 'Zangdokpalri' representing Guru Rinpoche's Heavenly Palace.",
            "highlights": [
                "Seven-tiered Zangdokpalri wooden sculpture",
                "Statue of Padmasambhava in wrathful form",
                "Beautiful wall paintings and murals",
                "View of ruins of Rabdantse palace",
                "Traditional Tibetan architectural elements"
            ],
            "visiting_info": {
                "timings": "8:00 AM - 5:00 PM",
                "entry_fee": "Nominal fee charged",
                "best_time": "March to June, September to November",
                "duration": "1-2 hours"
            },
            "festivals": ["Guru Drakmar Chham (February-March)"],
            "how_to_reach": "140 km from Gangtok, 2 km before Pelling. Accessible by taxi from Gangtok or local transport from Pelling."
        },
        {
            "id": "dubdi",
            "name": "Dubdi Monastery",
            "subtitle": "The Hermit's Cell - Oldest Monastery",
            "location": "3 km from Yuksom, West Sikkim",
            "established": "1701 AD",
            "sect": "Nyingma",
            "elevation": "2,100 meters",
            "significance": "Oldest monastery in Sikkim, founded to commemorate the coronation of first Chogyal",
            "description": "Established in 1701 by Chogyal Phuntsog Namgyal, Dubdi is the oldest monastery in Sikkim. Located on a hilltop accessible by an hour's trek from Yuksom, it was built to venerate Patron Saint Gyalwa Lhatsun Chempo. The name 'Dubdi' literally means 'the retreat' in the local language.",
            "architecture": "Two-storied stone architecture with a bell-shaped structure called Gyaltshen atop the roof. Features statues of three lamas and traditional Tibetan design elements adapted to mountain conditions.",
            "highlights": [
                "Oldest surviving monastery in Sikkim",
                "Historic significance in Sikkim's founding",
                "Statues of three founding lamas",
                "Scenic hilltop location",
                "Part of Buddhist pilgrimage circuit"
            ],
            "visiting_info": {
                "timings": "Daylight hours",
                "entry_fee": "Free",
                "best_time": "March to June, October to December",
                "duration": "2-3 hours (including trek)"
            },
            "festivals": ["Buddhist calendar festivals"],
            "how_to_reach": "3 km trek from Yuksom. Yuksom accessible by shared jeep from Pelling or Geyzing (2 hours)."
        },
        {
            "id": "tashiding",
            "name": "Tashiding Monastery",
            "subtitle": "The Heart of Sikkim",
            "location": "Tashiding, West Sikkim",
            "established": "1651 AD",
            "sect": "Nyingma",
            "elevation": "1,465 meters",
            "significance": "Most sacred monastery in Sikkim, believed to be the spiritual center",
            "description": "Tashiding means 'The Devoted Central Glory' and is considered the most sacred monastery in Sikkim. Founded in 1651, it is located on a hill between the Rathong and Rangeet rivers. The monastery houses the sacred vase of Guru Padmasambhava and is believed to be the spiritual navel of Sikkim.",
            "architecture": "Traditional Nyingma style with prayer flags fluttering around the hilltop location. Features a main temple with sacred relics and traditional Tibetan architectural elements.",
            "highlights": [
                "Sacred vase of Guru Padmasambhava",
                "Most sacred monastery in Sikkim",
                "Bumchu festival predictions",
                "Scenic location between two rivers",
                "Historical and religious significance"
            ],
            "visiting_info": {
                "timings": "Sunrise to sunset",
                "entry_fee": "Free",
                "best_time": "February-March (Bumchu festival), October to April",
                "duration": "2-3 hours"
            },
            "festivals": ["Bumchu Festival (February-March)"],
            "how_to_reach": "27 km from Gyalshing, 40 km from Gyalshing town. Accessible by local transport and taxi."
        },
        {
            "id": "enchey",
            "name": "Enchey Monastery",
            "subtitle": "The Solitary Temple",
            "location": "3 km from Gangtok center",
            "established": "1840 AD",
            "sect": "Nyingma",
            "elevation": "1,950 meters",
            "significance": "Ancient monastery with legendary tantric master connections",
            "description": "Enchey, meaning 'The Solitary Temple', is a 200-year-old monastery remarkably well-preserved in its original architectural form. Legend says it was built at the site where Lama Druptob Karpo, who possessed the ability to fly, established his hermitage after flying from nearby Maenam Hill.",
            "architecture": "Traditional Tibetan style with well-preserved original architecture. Features intricate decorations and maintains the ancient monastic design principles.",
            "highlights": [
                "Well-preserved 200-year-old structure",
                "Legendary tantric master connections",
                "Detor Cham ritual dance",
                "Close to Gangtok city center",
                "Mountain deity residence legends"
            ],
            "visiting_info": {
                "timings": "9:00 AM - 6:00 PM",
                "entry_fee": "Free",
                "best_time": "March to June, September to October",
                "duration": "1-2 hours"
            },
            "festivals": ["Detor Cham (January-February)", "Pang Lhabsol (August-September)"],
            "how_to_reach": "3 km from Gangtok center. Easily accessible by taxi or local transport."
        },
        {
            "id": "phodong",
            "name": "Phodong Monastery",
            "subtitle": "Beautiful Mountain Monastery",
            "location": "28 km from Gangtok, North Sikkim",
            "established": "1734 AD",
            "sect": "Kagyu",
            "elevation": "1,372 meters",
            "significance": "One of the six most important Buddhist monasteries in Sikkim",
            "description": "Phodong Monastery, built in the early 18th century, is considered one of the most beautiful monasteries in Sikkim. Located at 4,500 feet altitude, it houses around 260 monks and is rated among the six most important Buddhist monasteries in the state.",
            "architecture": "Features the Dukhang main prayer hall, stupas, chortens, and monks' quarters. Intricate gateways, thangka paintings, wooden carvings, and enticing murals decorate the complex.",
            "highlights": [
                "One of six most important monasteries",
                "Houses 260 monks",
                "Beautiful mountain location",
                "Cham dance festival",
                "Traditional Tibetan and Sikkimese architecture"
            ],
            "visiting_info": {
                "timings": "7:00 AM - 5:00 PM",
                "entry_fee": "Free (donations welcome)",
                "best_time": "March to June, September to November",
                "duration": "1-2 hours"
            },
            "festivals": ["Cham Dance"],
            "how_to_reach": "28 km from Gangtok. Accessible by taxi or local transport."
        }
    ],
    "architecture_features": [
        "Traditional Tibetan Buddhist design with local adaptations",
        "Intricate wood carvings with vibrant colors",
        "Prayer wheels and mani walls",
        "Sloping roofs to handle snow and rain",
        "Rammed earth walls with stone foundations",
        "Colorful murals depicting Buddhist mythology",
        "Golden stupas and decorative elements",
        "Prayer flags and ceremonial courtyards"
    ],
    "cultural_significance": [
        "Preservation of Tibetan Buddhist culture in exile",
        "Centers of learning and spiritual practice",
        "Repositories of ancient manuscripts and art",
        "Cultural bridge between Tibet and India",
        "Centers for community festivals and celebrations",
        "Training grounds for Buddhist monks",
        "Museums of Buddhist art and artifacts"
    ],
    "visitor_guidelines": [
        "Maintain peace and tranquility",
        "Remove shoes before entering main halls",
        "No loud noises or mobile phone use",
        "Do not touch artifacts and holy objects",
        "Circumambulate monastery clockwise",
        "Seek permission before photography",
        "Dress modestly and respectfully",
        "Leave offerings as mark of respect",
        "No eating, smoking, or drinking on premises"
    ],
    "best_times_to_visit": {
        "peak_season": "March to June, September to November",
        "festival_season": "February to March (Losar, Bumchu), August to September",
        "weather_note": "Avoid monsoon season (June-September) due to heavy rains",
        "special_events": "Plan visits around major Buddhist festivals for cultural experiences"
    },
    "pilgrimage_circuit": [
        "Dubdi Monastery (Yuksom)",
        "Norbugang Chorten",
        "Pemayangtse Monastery", 
        "Tashiding Monastery",
        "Rabdentse Ruins",
        "Sanga Choeling Monastery",
        "Khecheopalri Lake"
    ]
}

# Convert to JSON string for the web application
json_data = json.dumps(monasteries_data, indent=2, ensure_ascii=False)
print("Successfully compiled comprehensive data for Sikkim monasteries website")
print(f"Data includes {len(monasteries_data['featured_monasteries'])} featured monasteries")
print("Architecture features, cultural significance, and visitor information included")