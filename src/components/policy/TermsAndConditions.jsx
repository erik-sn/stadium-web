import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  textBlock: {
    margin: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 10,
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing.unit * 1,
      marginRight: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit * 2,
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing.unit * 5,
      marginRight: theme.spacing.unit * 20,
      marginLeft: theme.spacing.unit * 20,
    },
  },
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit,
  }
})

const TermsAndConditions = ({ classes }) => {
  return (
    <div>
      <div className={classes.textBlock}>
        <Typography className={classes.title} variant="h3">Terms and Conditions</Typography>
        <Typography variant="subtitle1">These terms and conditions (&quot;Terms&quot;, &quot;Agreement&quot;) are an agreement between Website Operator (&quot;Website Operator&quot;, &quot;us&quot;, &quot;we&quot; or &quot;our&quot;) and you (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;). This Agreement sets forth the general terms and conditions of your use of the <a target="_blank" rel="noopener noreferrer" href="http://www.scigym.ai">scigym.ai</a> website and any of its products or services (collectively, &quot;Website&quot; or &quot;Services&quot;).</Typography>
        <Typography className={classes.title} variant="h4">Accounts and membership</Typography>
        <Typography variant="subtitle1">If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and use our Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.</Typography>
        <Typography className={classes.title} variant="h4">User content</Typography>
        <Typography variant="subtitle1">We do not own any data, information or material (&quot;Content&quot;) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you. Unless specifically permitted by you, your use of the Website does not grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose. But you grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you. Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable.</Typography>
        <Typography className={classes.title} variant="h4">Backups</Typography>
        <Typography variant="subtitle1">We perform regular backups of the Website and  Content, however, these backups are for our own administrative purposes only and are in no way guaranteed. You are responsible for maintaining your own backups of your data. We do not provide any sort of compensation for lost or incomplete data in the event that backups do not function properly. We will do our best to ensure complete and accurate backups, but assume no responsibility for this duty.</Typography>
        <Typography className={classes.title} variant="h4">Links to other websites</Typography>
        <Typography variant="subtitle1">Although this Website may link to other websites, we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked website, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their websites. We do not assume any responsibility or liability for the actions, products, services, and content of any other third-parties. You should carefully review the legal statements and other conditions of use of any website which you access through a link from this Website. Your linking to any other off-site websites is at your own risk.</Typography>
        <Typography className={classes.title} variant="h4">Prohibited uses</Typography>
        <Typography variant="subtitle1">In addition to other terms as set forth in the Agreement, you are prohibited from using the Website or its Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</Typography>
        <Typography className={classes.title} variant="h4">Limitation of liability</Typography>
        <Typography variant="subtitle1">To the fullest extent permitted by applicable law, in no event will Website Operator, its affiliates, officers, directors, employees, agents, suppliers or licensors be liable to any person for (a): any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if Website Operator has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of Website Operator and its affiliates, officers, employees, agents, suppliers and licensors, relating to the services will be limited to an amount greater of one dollar or any amounts actually paid in cash by you to Website Operator for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.</Typography>
        <Typography className={classes.title} variant="h4">Indemnification</Typography>
        <Typography variant="subtitle1">You agree to indemnify and hold Website Operator and its affiliates, directors, officers, employees, and agents harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third-party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Website or Services or any willful misconduct on your part.</Typography>
        <Typography className={classes.title} variant="h4">Severability</Typography>
        <Typography variant="subtitle1">All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.</Typography>
        <Typography className={classes.title} variant="h4">Changes and amendments</Typography>
        <Typography variant="subtitle1">We reserve the right to modify this Agreement or its policies relating to the Website or Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes. Policy was created with <a target="_blank" rel="noopener noreferrer" title="Generate terms and conditions" href="https://www.websitepolicies.com/terms-and-conditions-generator">WebsitePolicies</a>.</Typography>
        <Typography className={classes.title} variant="h4">Acceptance of these terms</Typography>
        <Typography variant="subtitle1">You acknowledge that you have read this Agreement and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Website and its Services.</Typography>
        <Typography className={classes.title} variant="h4">Contacting us</Typography>
        <Typography variant="subtitle1">If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, you may send an email to i&#110;fo&#64;&#115;&#99;ig&#121;&#109;&#46;ai</Typography>
        <Typography variant="subtitle1">This document was last updated on August 30, 2019</Typography>
      </div >
    </div >
  );
};

TermsAndConditions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TermsAndConditions);
