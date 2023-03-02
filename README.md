# Mktg-50anniversary

Repo for development of marketing materials around GS1 50th anniversary

## Timeline Block

Simple block for the timeline. Using the [slick library](https://kenwheeler.github.io/slick/) for the creation of the block. This library can't be removed, otherwise the timeline won't work.

A working example of the timeline block can be seen at [50YearsOfGS1](https://www.gs1.org/about/50YearsOfGS1).

### Changing the content

All images and content can be changed. We just can't remove the classes outside of that.

Examples:

- All content inside both `<div>` in the bottom can be changed but not the classes in the div:

```html
<div class="wrapper">
    <img src="img/1973.png" />
</div>

...

<div class="wrapper wrapper-body">
    <h3>2022</h3>
    <p>
        A joint World Trade Organization (WTO) and World Economic
        Forum (WEF) report outlines the power of GS1 product and
        location identification to make cross-border trade more
        efficient, inclusive and sustainable.
    </p>
</div>
```
