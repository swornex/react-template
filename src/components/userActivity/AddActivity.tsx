import { FormData } from '@/interfaces/userActivity';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

const AddActivity = (props: {
  setUsersActivity: React.Dispatch<React.SetStateAction<FormData[]>>;
}) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      activities: [
        {
          description: '',
          timeSpent: '',
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'activities',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    props.setUsersActivity((prev) => [...prev, data]);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6">
          <div>
            <label className="label" htmlFor="name">
              Name:{' '}
            </label>
            <input
              id="name"
              placeholder="Joe Biden"
              className="placeholder input"
              {...register('user.name', {
                required: 'true',
              })}
            />
            {errors.user?.name && (
              <p className="error">Please fill your name</p>
            )}
          </div>

          <div>
            <label className="label" htmlFor="age">
              Age:{' '}
            </label>
            <input
              id="age"
              type="number"
              placeholder="30"
              className="placeholder input"
              {...register('user.age', {
                required: 'true',
              })}
            />
            {errors.user?.age && <p className="error">Please fill your age</p>}
          </div>

          <div>
            <label className="label" htmlFor="contact">
              Contact:{' '}
            </label>
            <input
              id="contact"
              placeholder="9875214630"
              className="placeholder input"
              {...register('user.contact', {
                required: 'true',
              })}
            />
            {errors.user?.contact && (
              <p className="error">Please fill your contact</p>
            )}
          </div>
        </div>

        <div className="my-6 flex justify-between">
          <h1 className="text-2xl font-semibold">Activities</h1>
          <a
            className="btn btn-outline btn-primary w-20 text-2xl"
            onClick={() => {
              append({
                description: '',
                timeSpent: '',
              });
            }}
          >
            +
          </a>
        </div>

        <div>
          {fields.map((field, index) => {
            return (
              <section key={field.id} className="flex justify-between">
                <div>
                  <label className="label" htmlFor={`description${index}`}>
                    Description:
                  </label>
                  <input
                    placeholder="React training"
                    id={`description${index}`}
                    className="placeholder input"
                    {...register(`activities.${index}.description`, {
                      required: 'true',
                    })}
                  />
                  {errors.activities?.[index]?.description && (
                    <p className="error">Please fill the description</p>
                  )}
                </div>

                <div>
                  <label className="label" htmlFor={`timeSpent${index}`}>
                    Time Spent:
                  </label>
                  <input
                    id={`timeSpent${index}`}
                    placeholder="120m"
                    className="placeholder input"
                    {...register(`activities.${index}.timeSpent`, {
                      required: 'true',
                      pattern: /^(\d{1,}|[1-5]\d{2,})m$/,
                    })}
                  />
                  {errors.activities?.[index]?.timeSpent && (
                    <p className="error">Invalid format (eg: 120m)</p>
                  )}
                </div>

                <a
                  className="btn btn-outline btn-error self-end"
                  onClick={() => {
                    remove(index);
                  }}
                >
                  Remove
                </a>
              </section>
            );
          })}
        </div>

        <button type="submit" className="btn btn-primary mt-5">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddActivity;
