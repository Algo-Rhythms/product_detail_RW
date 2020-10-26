const faker = require('faker');
const fs = require('fs');

console.time();

function seedProductData(writer, encoding, callback) {
  let i = 1000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      // insert faker function here
      const name = faker.commerce.productName();
      const slogan = faker.lorem.sentence(3);
      const description = faker.lorem.sentences(2);
      const category = faker.company.bsBuzz();
      const default_price = faker.commerce.price();
      const data = `${id},${name},${slogan},${description},${category},${default_price}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

const writeProduct = fs.createWriteStream('product.csv');
writeProduct.write('id, name, slogan, description, category, default_price\n', 'utf8');

seedProductData(writeProduct, 'utf-8', () => {
  writeProduct.end();
});

// FEATURES

function seedFeaturesData(writer, encoding, callback) {
  let i = 1000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      // insert faker function here
      const product_id = faker.random.number({
        min: 1,
        max: 1000000,
      });
      const feature = faker.hacker.adjective();
      const value = faker.hacker.noun();

      const data = `${id},${product_id},${feature},${value}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

const writeFeature = fs.createWriteStream('features.csv');
writeFeature.write('featuresId, product_id, feature, value\n', 'utf8');

seedFeaturesData(writeFeature, 'utf-8', () => {
  writeFeature.end();
});

// STYLES

function seedStylesData(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      // insert faker function here
      const product_id = faker.random.number({
        min: 1,
        max: 1000000,
      });
      const name = faker.commerce.productName();
      const sale_price = (id % 3 === 0) ? faker.commerce.price() : null;
      const original_price = faker.commerce.price();
      const default_style = faker.random.number(1);

      const data = `${id},${product_id},${name},${sale_price},${original_price},${default_style}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

const writeStyle = fs.createWriteStream('styles.csv');
writeStyle.write('stylesId, product_id, name, sale_price, original_price, default_style\n', 'utf8');

seedStylesData(writeStyle, 'utf-8', () => {
  writeStyle.end();
});

// SKUS======================================

function seedSkusData(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      // insert faker function here
      const styles_id = faker.random.number({
        min: 1,
        max: 10000000,
      });
      const size = faker.helpers.randomize(['XS', 'S', 'M', 'L', 'XL', 'XXL', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12']);
      const quantity = faker.random.number({
        min: 1,
        max: 60,
      });

      const data = `${id},${styles_id},${size},${quantity}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

const writeSku = fs.createWriteStream('skus.csv');
writeSku.write('skusId, style_id, size, quantity\n', 'utf8');

seedSkusData(writeSku, 'utf-8', () => {
  writeSku.end();
});

//= =====PHOTOS=========================

function seedPhotosData(writer, encoding, callback) {
  let i = 1000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      // insert faker function here
      const styles_id = faker.random.number({
        min: 1,
        max: 1000000,
      });
      const url = faker.image.imageUrl(640, 480, 'fashion', true);
      const thumbnail_url = faker.image.imageUrl(240, 240, 'fashion', true);

      const data = `${id},${styles_id},${url},${thumbnail_url}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

const writePhoto = fs.createWriteStream('photos.csv');
writePhoto.write('photosId, style_id, url, thumbnail_url\n', 'utf8');

seedPhotosData(writePhoto, 'utf-8', () => {
  writePhoto.end();
});

console.timeEnd();
