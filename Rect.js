class Rect
{
    constructor(xtl, ytl, xbr, ybr)
    {
        this.xtl = xtl;
        this.ytl = ytl;
        this.xbr = xbr;
        this.ybr = ybr;
    }

    display()
    {
        drawLine(this.xtl, this.ytl, this.xtl, this.ybr);
        drawLine(this.xtl, this.ytl, this.xbr, this.ytl);
        drawLine(this.xbr, this.ytl, this.xbr, this.ybr);
        drawLine(this.xtl, this.ybr, this.xbr, this.ybr);
    }
}