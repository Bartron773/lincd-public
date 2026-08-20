export default function Assessment({ assessment, assessmentKey, index, count, responses, onResponse }) {
  let itemNumber = 0;
  const answered = Object.values(responses[assessmentKey] || {}).reduce((sum, section) => sum + Object.keys(section).length, 0);
  const total = Object.values(assessment.sections).reduce((sum, items) => sum + items.length, 0);

  return <main className="page-shell assessment-page">
    <header className="section-heading">
      <p className="eyebrow" style={{ color: assessment.color }}>Part {index + 1} of {count}</p>
      <h1>{assessment.title}</h1>
      <p>{answered} of {total} statements answered</p>
      <div className="progress" aria-label={`${answered} of ${total} answered`}><span style={{ width: `${answered / total * 100}%`, background: assessment.color }} /></div>
    </header>
    {Object.entries(assessment.sections).map(([sectionName, items]) => <section className="glass question-section" key={sectionName}>
      <h2 style={{ color: assessment.color }}>{sectionName}</h2>
      {items.map((item, itemIndex) => {
        itemNumber += 1;
        const value = responses[assessmentKey]?.[sectionName]?.[itemIndex];
        return <fieldset className="question" key={item}>
          <legend><span>{String(itemNumber).padStart(2, '0')}</span>{item}</legend>
          <div className="rating" aria-label={`Rating for ${item}`}>
            {[0, 1, 2, 3].map(rating => <button type="button" aria-pressed={value === rating} className={value === rating ? 'selected' : ''} style={value === rating ? { '--accent': assessment.color } : {}} onClick={() => onResponse(assessmentKey, sectionName, itemIndex, rating)} key={rating}>{rating}<small>{['Not true', 'Rarely', 'Often', 'Very true'][rating]}</small></button>)}
          </div>
        </fieldset>;
      })}
    </section>)}
  </main>;
}
