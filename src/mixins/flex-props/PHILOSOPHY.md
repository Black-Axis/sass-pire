# Flex box philosophy in sass-pire

Previously, we had to write properties of CSS flex box in details like this:

```
    display: flex;
    justify-content: center;
    align-items: center;
```

But what about vendor prefixes? This will be a little confusing when using SCSS in your project to make sure that all properties for flex box or others properties are compatibility with all browsers and support in them.

The philosophy to use flex box in sass-pire is to make the using of flex box properties more easier than past!

# Pattern to follow

We created a pattern to be followed when using flex box properties.
This pattern goes as follows:

Name_Of_Flexbox-Justify_Content_Value-Align_Items_Value;

Example:
To use a flex box with justify content center and align items start, you can write this pattern as a mixin:

```
    @include flex-center-start();
```

This means that you are using flex box from first part of pattern (flex) and using a value of (center) with justify content and using a value of (start) with align items.

You can go with pattern to write all values of two properties of justify content and align items.

# Be more productive
You can pass an argument to this mixins as a direction for flex box.

Example:

```
    @include inflex-center-end(row-reverse);
```

In these mixins, we called another mixins to generate all properties for flex box and its vendor prefixes.

Just write your one line, and let me handle it 🤝
