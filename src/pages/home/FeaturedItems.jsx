import classNames from 'classnames';
import styles from 'assets/styles/pages/home/featuredItems.module.scss';
import SectionTitle from 'partials/SectionTitle';
import FlipCard from 'partials/FlipCard';

const FeaturedItems = () => {
  return (
    <section className={classNames(styles.featuredItems)}>
      <SectionTitle title="Our" highlightedText="blog's" />
      <div className={classNames(styles.cardsWrapper)}>
        <FlipCard
          imageSRC="https://img.freepik.com/premium-photo/businessman-draw-growth-graph-and-progress-of-business-and-analyzing-financial_34200-419.jpg?w=2000"
          title="How can a stuffing solution company help your business?"
          description="IT Staffing agencies maintain an active talent pool which allows them to scout talent quickly. When a company loses employees it’s important that those positions are not only replaced by qualified individuals but those positions also need to be replaced quickly so that the workload doesn’t become too heavy for the existing employees. Plus staffing agencies carefully interview prospects to gain as much knowledge as possible and make good placements. Besides IT Staffing agencies absorb the cost of the initial stages of a new hire. They often conduct the background checks and even do part of if not all of the training. This can save your company a ton of money. Plus, if an employee turns out not to be a good fit, many staffing agencies guarantee a replacement employee. Not only does this process save time, it saves money and allows your company to continue to be productive even if the hiring process is not complete and your company lacks permanent employees. You are given the staff you need, even if the employees remain temporary hires. Your productivity is not interrupted because there are employees in place to do the job."
        />
        <FlipCard
          imageSRC="https://www.gempool.ie/images/uploads/connecting_with_candidates_through_social_media.jpg"
          title="Why staffing solutions are crucial for business excellence?"
          description="Staffing has always been a vital support function in all critical management processes such as planning, organizing, directing, and controlling. Effective staffing solutions are required to ensure that an organization runs smoothly and efficiently. Staffing entails selecting the right person for the right job, training and onboarding, and providing appropriate remuneration, performance appraisals, promotions, and employee transfers. Companies realize the value of job-specific contract staffing to achieve their business goals. Companies are increasingly outsourcing a large portion of their work to contractual employees who work for them for a set period and deliver the desired results across the board. While the company has no additional liabilities, as in the case of seasoned employees in-house, they can also judge the credibility of the contract staff and may even consider hiring them if they appear to be effective enough to advance the company's goals.
However, there are some other fundamental reasons why companies are shifting their focus to hiring contract-based staffing. Nowadays, having a functional skill set that will help companies in achieving the desired output in all accounts is critical.
Frequently, it is discovered that internal employees do not meet all expectations. The need for specific roles increases the demand for contract staffing among businesses that promptly deliver the required results. It will allow them to address their priorities on time without engaging with an employee. It is additional compensation that would not have been available to internal employees.
It is also a proven fact that contractual employees deliver the desired results on time because they are compensated for their productivity and output in most cases. All of these factors combine to make contractual workers a powerful force in today's marketplace, driving growth and profit in all areas.
"
        />
        <FlipCard
          imageSRC="https://bradfordjacobs.imgix.net/Outsourcing-hr-and-recruitment.jpg?auto=compress%2Cformat&ixlib=php-3.3.0"
          title="How most companies use global IT staffing solutions?"
          description="An IT recruiter will identify exceptional professionals who are the right fit for an open job – such as a cybersecurity chief or senior developer – and then pitch these professionals on the position. Often, these professionals are not actively looking for new jobs but would consider switching positions for the right opportunity. The recruiter will first screen candidates to ensure they are open to the new role and have the right skill set. Next, the recruiter will present the hiring manager with a curated list of potential hires. The recruiter will also serve as a go-between during the interview process and salary negotiations until a successful hire is made."
        />
      </div>
    </section>
  );
};

export default FeaturedItems;
