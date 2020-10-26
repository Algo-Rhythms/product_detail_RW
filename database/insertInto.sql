



INSERT INTO product(
id, name, slogan, description, category, default_price)
VALUES (1, 'Camo Onesie', 'Blend in to your crowd', 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.', 'Jackets', 140);


INSERT INTO styles(
	stylesId, product_id, name, sale_price, original_price, default_style)
	VALUES (1, 1, 'Forest Green & Black', null, 140, 1);

    INSERT INTO styles(
	product_id, name, sale_price, original_price, default_style)
	VALUES (1, 'Forest Green & Black', null, '140', 1);


INSERT INTO features(
	featuresId, product_id, feature, value)
	VALUES (1, 1, 'Fabric', 'Canvas');

INSERT INTO features(
	featuresId, product_id, feature, value)
	VALUES (2, 1, 'Buttons', 'Brass');

INSERT INTO skus (
  styles_id, size, quantity)
  VALUES (1, 'XS', 8);

	INSERT INTO skus (
  styles_id, size, quantity)
  VALUES (1, 'S', 10);

INSERT INTO photos (
	styles_id, url, thumbnail_url)
	Values (1, 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');



EXPLAIN ANALYZE
SELECT
  stylesId, name, original_price, sale_price, default_style, photosId, url, thumbnail_url, skusId, size, quantity
  FROM
  styles

  LEFT OUTER JOIN photos
  ON photos.styles_id = stylesId

  LEFT OUTER JOIN skus
  ON skus.styles_id = stylesId

  WHERE styles.product_id = 900000;

EXPLAIN ANALYZE
  SELECT
    id, name, slogan, description, category, default_price,
    featuresId, feature, value

  FROM product

  LEFT OUTER JOIN features

  ON product_id = id

  WHERE id = 900000;




CREATE INDEX product_index ON product (id);
CREATE INDEX styles_index ON styles (product_id);

CREATE INDEX features_index ON features (product_id)

CREATE INDEX skus_index ON skus (styles_id);
CREATE INDEX photos_index ON photos (styles_id);


DROP INDEX product_index;
DROP INDEX styles_index;

