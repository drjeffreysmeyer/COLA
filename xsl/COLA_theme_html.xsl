<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://w3.org" 
                xmlns:xs="http://w3.org"
                version="1.0">

    <!-- REQUIRED: Instructs PreTeXt CLI to safely pull the default HTML engine -->
    <xsl:import href="./core/pretext-html.xsl" />

    <!-- Overrides the built-in template that generates the Runestone badge -->
    <xsl:template name="runestone-link">
        <!-- Intentionally left completely blank to eliminate the link/logo -->
    </xsl:template>

</xsl:stylesheet>