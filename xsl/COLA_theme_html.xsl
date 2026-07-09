<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <!-- Import the core PreTeXt HTML stylesheet -->
  
  <!-- Place your custom XSL templates and parameter overrides below -->

      <xsl:template match="@* | node()">
        <xsl:copy>
            <xsl:apply-templates select="@* | node()"/>
        </xsl:copy>
    </xsl:template>

    <!-- 2. Overrides for Definition Elements -->
    <xsl:template match="definition">
        <div style="border: 2px solid #0056b3; background-color: #e6f2ff; padding: 15px; margin: 10px 0; border-radius: 5px;">
            <strong style="color: #0056b3;">Definition: </strong>
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <!-- 3. Overrides for Proposition Elements -->
    <xsl:template match="proposition">
        <div style="border: 2px solid #b30000; background-color: #ffe6e6; padding: 15px; margin: 10px 0; border-radius: 5px;">
            <strong style="color: #b30000;">Proposition: </strong>
            <xsl:apply-templates/>
        </div>
    </xsl:template>

</xsl:stylesheet>