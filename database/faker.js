/* eslint-disable quote-props */
const faker = require('faker');

// dont need product id, since it is already doing it

// product
// let name = faker.commerce.productName();
// let slogan = faker.lorem.sentence(3);
// let description = faker.lorem.sentences(2);
// let category = faker.company.bsBuzz();
// let default_price = faker.commerce.price();

// features
// let product_id = faker.random.number(10000);
// let features = faker.hacker.adjective();
// let value = faker.hacker.noun();

// styles
// let product_id = faker.random.number({
//   'min': 1,
//   'max': 2
// });
// let name = faker.commerce.productName();
// let sale_price = faker.commerce.price(); //id modulo 3 === 0
// let original_price = faker.commerce.price();
// let default_style = faker.random.number(1);

// skus
// let styles_id = faker.random.number({
//     'min': 1,
//     'max': 200000
//   });
// let size = faker.helpers.randomize(['XS', 'S', 'M', 'L', 'XL', 'XXL', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12']);
// let quantity = faker.random.number({
//   'min': 1,
//   'max': 60
// })

// photos
const styles_id = faker.random.number({
  min: 1,
  max: 20000,
});
const url = faker.image.imageUrl(640, 480, 'fashion', true);
const url_thumbnail = faker.image.imageUrl(240, 240, 'fashion', true);
console.log(url_thumbnail);

// eslint-disable-next-line no-unused-expressions

/*
[
  {
    'Plan': {
      'Node Type': 'Hash Join',
      'Parallel Aware': false,
      'Join Type': 'Right',
      'Startup Cost': 330231.72,
      'Total Cost': 359366.73,
      'Plan Rows': 11,
      'Plan Width': 138,
      'Actual Startup Time': 7027.860,
      'Actual Total Time': 7233.935,
      'Actual Rows': 16,
      'Actual Loops': 1,
      'Output': ['styles.stylesid', 'styles.name', 'styles.original_price', 'styles.sale_price', 'styles.default_style', 'photos.photosid', 'photos.url', 'photos.thumbnail_url', 'skus.skusid', 'skus.size', 'skus.quantity'],
      'Inner Unique': false,
      'Hash Cond': '(photos.styles_id = styles.stylesid)',
      'Shared Hit Blocks': 11451,
      'Shared Read Blocks': 154831,
      'Shared Dirtied Blocks': 0,
      'Shared Written Blocks': 0,
      'Local Hit Blocks': 0,
      'Local Read Blocks': 0,
      'Local Dirtied Blocks': 0,
      'Local Written Blocks': 0,
      'Temp Read Blocks': 0,
      'Temp Written Blocks': 0,
      'Plans': [
        {
          'Node Type': 'Seq Scan',
          'Parent Relationship': 'Outer',
          'Parallel Aware': false,
          'Relation Name': 'photos',
          'Schema': 'public',
          'Alias': 'photos',
          'Startup Cost': 0.00,
          'Total Cost': 25385.00,
          'Plan Rows': 1000000,
          'Plan Width': 90,
          'Actual Startup Time': 1.265,
          'Actual Total Time': 121.632,
          'Actual Rows': 1000000,
          'Actual Loops': 1,
          'Output': ['photos.photosid', 'photos.styles_id', 'photos.url', 'photos.thumbnail_url'],
          'Shared Hit Blocks': 2428,
          'Shared Read Blocks': 12957,
          'Shared Dirtied Blocks': 0,
          'Shared Written Blocks': 0,
          'Local Hit Blocks': 0,
          'Local Read Blocks': 0,
          'Local Dirtied Blocks': 0,
          'Local Written Blocks': 0,
          'Temp Read Blocks': 0,
          'Temp Written Blocks': 0,
        },
        {
          'Node Type': 'Hash',
          'Parent Relationship': 'Inner',
          'Parallel Aware': false,
          'Startup Cost': 330231.58,
          'Total Cost': 330231.58,
          'Plan Rows': 11,
          'Plan Width': 52,
          'Actual Startup Time': 6972.097,
          'Actual Total Time': 6972.128,
          'Actual Rows': 16,
          'Actual Loops': 1,
          'Output': ['styles.stylesid', 'styles.name', 'styles.original_price', 'styles.sale_price', 'styles.default_style', 'skus.skusid', 'skus.size', 'skus.quantity'],
          'Hash Buckets': 1024,
          'Original Hash Buckets': 1024,
          'Hash Batches': 1,
          'Original Hash Batches': 1,
          'Peak Memory Usage': 10,
          'Shared Hit Blocks': 9023,
          'Shared Read Blocks': 141874,
          'Shared Dirtied Blocks': 0,
          'Shared Written Blocks': 0,
          'Local Hit Blocks': 0,
          'Local Read Blocks': 0,
          'Local Dirtied Blocks': 0,
          'Local Written Blocks': 0,
          'Temp Read Blocks': 0,
          'Temp Written Blocks': 0,
          'Plans': [
            {
              'Node Type': 'Hash Join',
              'Parent Relationship': 'Outer',
              'Parallel Aware': false,
              'Join Type': 'Right',
              'Startup Cost': 148823.57,
              'Total Cost': 330231.58,
              'Plan Rows': 11,
              'Plan Width': 52,
              'Actual Startup Time': 5179.820,
              'Actual Total Time': 6972.085,
              'Actual Rows': 16,
              'Actual Loops': 1,
              'Output': ['styles.stylesid', 'styles.name', 'styles.original_price', 'styles.sale_price', 'styles.default_style', 'skus.skusid', 'skus.size', 'skus.quantity'],
              'Inner Unique': true,
              'Hash Cond': '(skus.styles_id = styles.stylesid)',
              'Shared Hit Blocks': 9023,
              'Shared Read Blocks': 141874,
              'Shared Dirtied Blocks': 0,
              'Shared Written Blocks': 0,
              'Local Hit Blocks': 0,
              'Local Read Blocks': 0,
              'Local Dirtied Blocks': 0,
              'Local Written Blocks': 0,
              'Temp Read Blocks': 0,
              'Temp Written Blocks': 0,
              'Plans': [
                {
                  'Node Type': 'Seq Scan',
                  'Parent Relationship': 'Outer',
                  'Parallel Aware': false,
                  'Relation Name': 'skus',
                  'Schema': 'public',
                  'Alias': 'skus',
                  'Startup Cost': 0.00,
                  'Total Cost': 155158.00,
                  'Plan Rows': 10000000,
                  'Plan Width': 15,
                  'Actual Startup Time': 0.274,
                  'Actual Total Time': 859.346,
                  'Actual Rows': 10000000,
                  'Actual Loops': 1,
                  'Output': ['skus.skusid', 'skus.styles_id', 'skus.size', 'skus.quantity'],
                  'Shared Hit Blocks': 544,
                  'Shared Read Blocks': 54614,
                  'Shared Dirtied Blocks': 0,
                  'Shared Written Blocks': 0,
                  'Local Hit Blocks': 0,
                  'Local Read Blocks': 0,
                  'Local Dirtied Blocks': 0,
                  'Local Written Blocks': 0,
                  'Temp Read Blocks': 0,
                  'Temp Written Blocks': 0,
                },
                {
                  'Node Type': 'Hash',
                  'Parent Relationship': 'Inner',
                  'Parallel Aware': false,
                  'Startup Cost': 148823.43,
                  'Total Cost': 148823.43,
                  'Plan Rows': 11,
                  'Plan Width': 41,
                  'Actual Startup Time': 5131.950,
                  'Actual Total Time': 5131.981,
                  'Actual Rows': 12,
                  'Actual Loops': 1,
                  'Output': ['styles.stylesid', 'styles.name', 'styles.original_price', 'styles.sale_price', 'styles.default_style'],
                  'Hash Buckets': 1024,
                  'Original Hash Buckets': 1024,
                  'Hash Batches': 1,
                  'Original Hash Batches': 1,
                  'Peak Memory Usage': 9,
                  'Shared Hit Blocks': 8479,
                  'Shared Read Blocks': 87260,
                  'Shared Dirtied Blocks': 0,
                  'Shared Written Blocks': 0,
                  'Local Hit Blocks': 0,
                  'Local Read Blocks': 0,
                  'Local Dirtied Blocks': 0,
                  'Local Written Blocks': 0,
                  'Temp Read Blocks': 0,
                  'Temp Written Blocks': 0,
                  'Plans': [
                    {
                      'Node Type': 'Gather',
                      'Parent Relationship': 'Outer',
                      'Parallel Aware': false,
                      'Startup Cost': 1000.00,
                      'Total Cost': 148823.43,
                      'Plan Rows': 11,
                      'Plan Width': 41,
                      'Actual Startup Time': 276.070,
                      'Actual Total Time': 5131.945,
                      'Actual Rows': 12,
                      'Actual Loops': 1,
                      'Output': ['styles.stylesid', 'styles.name', 'styles.original_price', 'styles.sale_price', 'styles.default_style'],
                      'Workers Planned': 2,
                      'Workers Launched': 2,
                      'Single Copy': false,
                      'Shared Hit Blocks': 8479,
                      'Shared Read Blocks': 87260,
                      'Shared Dirtied Blocks': 0,
                      'Shared Written Blocks': 0,
                      'Local Hit Blocks': 0,
                      'Local Read Blocks': 0,
                      'Local Dirtied Blocks': 0,
                      'Local Written Blocks': 0,
                      'Temp Read Blocks': 0,
                      'Temp Written Blocks': 0,
                      'Plans': [
                        {
                          'Node Type': 'Seq Scan',
                          'Parent Relationship': 'Outer',
                          'Parallel Aware': true,
                          'Relation Name': 'styles',
                          'Schema': 'public',
                          'Alias': 'styles',
                          'Startup Cost': 0.00,
                          'Total Cost': 147822.33,
                          'Plan Rows': 5,
                          'Plan Width': 41,
                          'Actual Startup Time': 668.085,
                          'Actual Total Time': 5125.253,
                          'Actual Rows': 4,
                          'Actual Loops': 3,
                          'Output': ['styles.stylesid', 'styles.name', 'styles.original_price', 'styles.sale_price', 'styles.default_style'],
                          'Filter': '(styles.product_id = 900000)',
                          'Rows Removed by Filter': 3333329,
                          'Shared Hit Blocks': 8479,
                          'Shared Read Blocks': 87260,
                          'Shared Dirtied Blocks': 0,
                          'Shared Written Blocks': 0,
                          'Local Hit Blocks': 0,
                          'Local Read Blocks': 0,
                          'Local Dirtied Blocks': 0,
                          'Local Written Blocks': 0,
                          'Temp Read Blocks': 0,
                          'Temp Written Blocks': 0,
                         'Workers': [
                            {
                              'Worker Number': 0,
                              'Actual Startup Time': 129.343,
                              'Actual Total Time': 5122.294,
                              'Actual Rows': 4,
                              'Actual Loops': 1,
                              'Shared Hit Blocks': 2832,
                              'Shared Read Blocks': 28848,
                              'Shared Dirtied Blocks': 0,
                              'Shared Written Blocks': 0,
                              'Local Hit Blocks': 0,
                              'Local Read Blocks': 0,
                              'Local Dirtied Blocks': 0,
                              'Local Written Blocks': 0,
                              'Temp Read Blocks': 0,
                              'Temp Written Blocks': 0,
                            },
                            {
                              'Worker Number': 1,
                              'Actual Startup Time': 1599.509,
                              'Actual Total Time': 5122.303,
                              'Actual Rows': 3,
                              'Actual Loops': 1,
                              'Shared Hit Blocks': 2723,
                              'Shared Read Blocks': 29094,
                              'Shared Dirtied Blocks': 0,
                              'Shared Written Blocks': 0,
                              'Local Hit Blocks': 0,
                              'Local Read Blocks': 0,
                              'Local Dirtied Blocks': 0,
                              'Local Written Blocks': 0,
                              'Temp Read Blocks': 0,
                              'Temp Written Blocks': 0,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    'Planning Time': 1.497,
    'Triggers': [
    ],
    'Execution Time': 7234.778
  },
];

*/
