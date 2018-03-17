20.times do
  App.create(
    name: Faker::Zelda.game,
    description: Faker::Lorem.sentence,
    category: Faker::HarryPotter.house,
    price: Faker::Commerce.price,
    version: Faker::Address.building_number,
    author: Faker::DrWho.character,
    logo: Faker::Company.logo,
  )
end
